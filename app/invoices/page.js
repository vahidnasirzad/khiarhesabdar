// app/invoices/page.js

import pool from '../../lib/db'; 
import InvoicesClient from './InvoicesClient';

async function getInvoices() {
  // This runs on the server to securely fetch data from the database.
  try {
    // NOTE: This assumes 'pool' is correctly configured and accessible here.
    const [rows] = await pool.query('SELECT * FROM invoice ORDER BY date ASC, id ASC');
    const invoices = rows.map(row => ({
      ...row,
      date: row.date ? row.date.toISOString().split('T')[0] : null
    }));
    return invoices;
  } catch (error) {
    console.error("Database query failed:", error);
    return []; 
  }
}

export default async function InvoicesPage() {
  // Fetch data before rendering the client component
  const initialInvoices = await getInvoices();

  return (
    // Pass data to the Client Component for filtering and display
    <InvoicesClient initialInvoices={initialInvoices} />
  );
}