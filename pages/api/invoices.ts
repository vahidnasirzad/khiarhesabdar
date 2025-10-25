// pages/api/invoices.ts (or your equivalent file)

import { prisma } from '../../lib/prisma';
import moment from 'moment-jalaali'; // Use moment-jalaali for Shamsi date handling
import { Prisma } from '@prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // --- GET: Fetch all invoices ---
    try {
      const invoices = await prisma.invoice.findMany({
        orderBy: {
          date: 'desc',
        },
      });

      // Convert the Gregorian date from the database back to Shamsi for the client
      const shamsiInvoices = invoices.map(invoice => ({
        ...invoice,
        // 1. Convert the standard JS Date object to a moment-jalaali object
        // 2. Format it to Shamsi (jYYYY/jMM/jDD) 
        //    (You might need to adjust the format string to match your frontend)
        date: moment(invoice.date).format('jYYYY/jMM/jDD'), 
      }));
      
      res.status(200).json(shamsiInvoices); 
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error fetching invoices' });
    }

  } else if (req.method === 'POST') {
    // --- POST: Create a new invoice ---
    try {
      let { date, title, description, amount, store_name, type, category, has_receipt, has_invoice } = req.body;

      // **********************************************
      // CRITICAL STEP: Convert Shamsi string to Gregorian Date object
      // **********************************************
      let gregorianDate: Date | undefined;
      
      if (date) {
        // 1. Create a moment-jalaali object from the Shamsi date string (e.g., "1403/07/30")
        const shamsiMoment = moment(date, 'jYYYY/jMM/jDD'); 
        
        if (!shamsiMoment.isValid()) {
             return res.status(400).json({ message: 'Invalid Shamsi date format' });
        }
        
        // 2. Convert it to a standard JavaScript Date object (Gregorian) for Prisma/Postgres
        gregorianDate = shamsiMoment.toDate(); 
      }
      // **********************************************

      const invoiceData: Prisma.InvoiceCreateInput = {
        store_name: store_name,
        // Pass the Gregorian Date object to Prisma
        date: gregorianDate || new Date(), 
        title: title,
        amount: parseFloat(amount), 
        type: type,
        category: category,
        description: description,
        has_receipt: !!has_receipt, 
        has_invoice: !!has_invoice,
      };

      const result = await prisma.invoice.create({
        data: invoiceData,
      });

      res.status(201).json({ id: result.id });
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error creating invoice' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}