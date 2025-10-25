import { NextApiRequest, NextApiResponse } from 'next'; // <-- 🚨 ESSENTIAL IMPORT
import { PrismaClient, Prisma } from '@prisma/client';

// Initialize the Prisma Client (UNCOMMENT IF YOU ARE USING PRISMA)
// const prisma = new PrismaClient(); 

// FIX: We MUST use the imported types for the API handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  // --- GET: Fetch all invoices ---
  if (req.method === 'GET') {
    try {
      // const invoices = await prisma.invoice.findMany({}); 
      const invoices: any[] = []; // Placeholder 
      
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
      
      // const newInvoice = await prisma.invoice.create({ data }); 

      return res.status(201).json({ message: 'Invoice created successfully (Placeholder)' });

    } catch (error) {
      console.error('Error processing POST request:', error);
      
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(500).json({ message: `Database Error: ${error.code} - Check your schema.` });
      }

      return res.status(500).json({ message: 'Failed to create invoice due to an unexpected server error.' });
    }
  }

  // Handle unsupported methods
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
