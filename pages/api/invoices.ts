import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

// Initialize the Prisma Client outside the handler for best performance
const prisma = new PrismaClient(); // <--- 💥 UNCOMMENTED! This must be present.

// FIX: We MUST use the imported types for the API handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  // --- GET: Fetch all invoices ---
  if (req.method === 'GET') {
    try {
      // Fetching all invoices is needed for the list view
      const invoices = await prisma.invoice.findMany({}); 
      
      return res.status(200).json({ invoices });
    } catch (error) {
      console.error('Error fetching invoices:', error);
      return res.status(500).json({ message: 'Failed to retrieve invoices from the database.' });
    }
  }

  // --- POST: Create a new invoice ---
  if (req.method === 'POST') {
    try {
      const data = req.body;
      
      if (!data.title || !data.amount || !data.date) {
        return res.status(400).json({ message: 'Missing required fields.' });
      }
      
      // 💥 ACTION: Actual database write operation is now uncommented
      const newInvoice = await prisma.invoice.create({ data }); 

      // Return the newly created object
      return res.status(201).json(newInvoice);

    } catch (error) {
      console.error('Error processing POST request:', error);
      
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // This catches issues like data type mismatch or constraint violations
        return res.status(500).json({ message: `Database Error: ${error.code} - Check your schema and data types.` });
      }

      return res.status(500).json({ message: 'Failed to create invoice due to an unexpected server error.' });
    }
  }

  // Handle unsupported methods
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
