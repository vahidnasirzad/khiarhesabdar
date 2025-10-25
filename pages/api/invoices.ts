// pages/api/invoices.ts

import { prisma } from '../../lib/prisma';
import moment from 'moment-jalaali'; 
import { Prisma } from '@prisma/client';

export default async function handler(req, res) {
  
  // --- GET: Fetch all invoices (This part is correct for conversion back to Shamsi) ---
  if (req.method === 'GET') {
    try {
      const invoices = await prisma.invoice.findMany({
        // 🚨 FIX START: Change orderBy to use an array for multi-field sorting 🚨
        orderBy: [
          { date: 'asc' }  // Secondary sort: Ensures correct chronological order for same dates
        ],
        // 🚨 FIX END 🚨
      });

      const shamsiInvoices = invoices.map(invoice => ({
        ...invoice,
        // Conversion from DB (Gregorian) to Client (Shamsi)
        date: moment(invoice.date).format('jYYYY/jMM/jDD'), 
      }));
      
      res.status(200).json(shamsiInvoices); 
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error fetching invoices' });
    }

  } else if (req.method === 'POST') {
    // --- POST: Create a new invoice (FIXED) ---
    try {
      let { date, title, description, amount, store_name, type, category, has_receipt, has_invoice } = req.body;

      // 🚨 FIX 🚨
      // The frontend sends 'date' as a Miladi string (YYYY-MM-DD), so we can pass it 
      // directly to Prisma. The Date type in Prisma handles ISO/SQL strings automatically.
      
      const invoiceData: Prisma.InvoiceCreateInput = {
        store_name: store_name,
        // Pass the received Gregorian date string directly to Prisma.
        // If the string is empty or invalid, you might set it to null or use a conditional.
        // Assuming date is always a valid "YYYY-MM-DD" string from the client:
        date: date ? new Date(date) : undefined, 
        
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