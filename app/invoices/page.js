// app/invoices/page.js

import moment from 'moment-jalaali'; 
import { prisma } from '../../lib/prisma'; // Ensure this path is correct
import InvoicesClient from './InvoicesClient'; 

// --- Data Structure (JSDoc) ---
/**
 * @typedef {object} Invoice
 * @property {number} id
 * @property {string | null} date
 * // ... other properties ...
 */

// Function to fetch all invoices using the Prisma client
// app/invoices/page.js (Only the getInvoices function is changed)

// ... (Your imports remain the same)
// ... (Your JSDoc typedef remains the same)

// --- The corrected data fetching function ---
async function getInvoices() {
  try {
    const rows = await prisma.invoice.findMany({
      orderBy: [
        { date: 'desc' },
        { id: 'desc' },
      ],
    });
    
    // 2. PROCESS THE ROWS
    const invoices = rows.map(row => {
        
        let formattedDate = null;
        
        // 🚨 CRITICAL FIX FOR JALAALI DATE 🚨
        if (row.date) {
            // 1. Convert the database value (which might be a string or Date object) 
            //    into a Moment object. If the database value is ALREADY a Jalaali date
            //    string, we use moment(string, format, locale) to force correct parsing.
            
            // Assuming your database column is *actually* storing a Persian date string:
            const dateString = row.date.toISOString ? row.date.toISOString().substring(0, 10) : String(row.date).substring(0, 10);
            
            // Try parsing the string as a Jalaali date directly (YYYY-MM-DD)
            const jalaaliMoment = moment(dateString, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
            
            // If the output is valid (not 'Invalid date'), use it.
            if (jalaaliMoment && jalaaliMoment !== 'Invalid date') {
                formattedDate = jalaaliMoment;
            } else {
                // Fallback: If it's a standard Date object, use the direct conversion
                formattedDate = moment(row.date).format('jYYYY/jMM/jDD');
            }
        }
        
        return {
            ...row,
            // Use the calculated date
            date: formattedDate,
            // Amount formatting
            amount: row.amount.toString(), 
        };
    });

    return invoices; 
  } catch (err) {
    console.error('Prisma Fetch Error:', err); 
    throw new Error('Failed to fetch invoices from the database.'); 
  }
}

// ... (Rest of your InvoicesPage component remains the same)

// Main Server Component: Renders the Client Component
export default async function InvoicesPage() {
  const invoices = await getInvoices();
  
  // NOTE: We no longer pass the styles as a prop since we defined them directly 
  // in InvoicesClient.js for simplicity and consistency.
  return (
    <InvoicesClient invoices={invoices} />
  );
}

// NOTE: You can remove the unused 'styles' object from this file now 
// if you copied them into InvoicesClient.js!