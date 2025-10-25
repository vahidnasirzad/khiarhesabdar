import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient(); 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method === 'POST') {
    try {
      const { date, title, description, amount, store_name, type, category, has_receipt, has_invoice } = req.body;
      
      // 💥 CRITICAL FIX: Convert string inputs to correct data types for the database
      const parsedAmount = parseFloat(amount); // Convert amount string to a number
      const parsedHasReceipt = Boolean(has_receipt); // Ensure boolean type
      const parsedHasInvoice = Boolean(has_invoice); // Ensure boolean type
      
      if (isNaN(parsedAmount) || !title || !date) {
        return res.status(400).json({ message: 'Invalid or missing required fields.' });
      }
      
      // Construct the data object with correctly typed values
      const dataToCreate = {
        date: new Date(date), // Ensure date is a Date object if required by Prisma
        title,
        description,
        amount: parsedAmount,
        store_name,
        type,
        category,
        has_receipt: parsedHasReceipt,
        has_invoice: parsedHasInvoice,
      };

      const newInvoice = await prisma.invoice.create({ data: dataToCreate }); 

      return res.status(201).json(newInvoice);

    } catch (error) {
      console.error('Error processing POST request:', error);
      
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(500).json({ message: `Database Error: ${error.code} - Check data types.` });
      }

      return res.status(500).json({ message: 'Failed to create invoice due to an unexpected server error.' });
    }
  }

  // Handle GET and other methods... (leaving them unchanged from the last successful push)
  if (req.method === 'GET') {
    try {
      const invoices = await prisma.invoice.findMany({}); 
      return res.status(200).json({ invoices });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to retrieve invoices.' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
