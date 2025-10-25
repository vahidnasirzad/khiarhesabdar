import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

// Initialize the Prisma Client outside the handler for best practice
// const prisma = new PrismaClient(); // <--- UNCOMMENT AND USE YOUR ACTUAL PRISMA CLIENT

// Explicitly define the types for the request and response objects
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  // --- GET: Fetch all invoices ---
  if (req.method === 'GET') {
    try {
      // const invoices = await prisma.invoice.findMany({}); // <--- Use your Prisma query here
      
      // Temporary placeholder response until Prisma is connected
      const invoices = []; 
      
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
      
      // Basic validation check
      if (!data.title || !data.amount || !data.date) {
        return res.status(400).json({ message: 'Missing required fields: title, amount, or date.' });
      }
      
      // const newInvoice = await prisma.invoice.create({ data }); // <--- Use your Prisma insertion here

      // Temporary placeholder response
      return res.status(201).json({ message: 'Invoice created successfully (Placeholder)' });

    } catch (error) {
      console.error('Error processing POST request:', error);
      
      // Handle database-specific errors if necessary
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(500).json({ message: `Database Error: ${error.code} - Check your schema and data types.` });
      }

      return res.status(500).json({ message: 'Failed to create invoice due to an unexpected server error.' });
    }
  }

  // Handle unsupported methods
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
