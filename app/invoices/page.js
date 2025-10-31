// app/invoices/page.js
import moment from 'moment-jalaali'; 
// ✅ CORRECT (Default Import)
import prisma from '../../lib/prisma';import InvoicesClient from './InvoicesClient'; 
import { unstable_noStore as noStore } from 'next/cache'; // Optional: Use if revalidatePath is too slow

async function getInvoices() {
  // If you are NOT using revalidatePath, you can uncomment noStore() to always fetch fresh data.
  // noStore(); 
  try {
    const rows = await prisma.invoice.findMany({
      orderBy: [
        { date: 'desc' }, // Sort by date descending
        { id: 'desc' },   // Use ID for stable ordering
      ],
    });
    
    // Process and format data for the client
    const invoices = rows.map(row => {
        const dateObj = row.date instanceof Date ? row.date : new Date(row.date);

        return {
            ...row,
            // Convert standard Date object to Jalaali string
            date: moment(dateObj).format('jYYYY/jMM/jDD'), 
            // Ensure amount is a string for client display
            amount: String(row.amount), 
        };
    });

    return invoices; 
  } catch (err) {
    console.error('Prisma Fetch Error:', err); 
    throw new Error('Failed to fetch initial invoices from the database.'); 
  }
}

// Main Server Component: This is the entry point for the /invoices route
export default async function InvoicesPage() {
  const invoices = await getInvoices();
  
  // Pass the initial, formatted data to the Client Component
  return (
    <InvoicesClient initialInvoices={invoices} />
  );
}