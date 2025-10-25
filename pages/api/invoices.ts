import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import moment from 'moment-jalaali'; // Dependency for date formatting (optional but useful)

/**
 * Handles GET requests to /api/invoices.
 * Fetches all invoices from the database and returns them.
 * * The client component expects the response to be in the format: { invoices: [...] }
 */
export async function GET() {
  try {
    // Select all necessary columns from the invoices table
    const result = await sql`
      SELECT 
        id, 
        date, 
        title, 
        description, 
        amount, 
        store_name, 
        type, 
        category, 
        has_receipt, 
        has_invoice
      FROM invoices;
    `;

    // Process dates to Jalaali format before sending to client (Optional but helpful for consistency)
    const invoices = result.rows.map(invoice => ({
      ...invoice,
      // Convert standard date string (or Date object) to Jalaali YYYY/MM/DD
      date: invoice.date ? moment(invoice.date).format('jYYYY/jMM/jDD') : null,
      // Ensure amount is a number for client-side processing, though often stored as text/numeric
      amount: Number(invoice.amount) 
    }));

    // CRITICAL: Return the data inside an object with the key 'invoices', as expected by the client component.
    return NextResponse.json({ invoices }, { status: 200 });

  } catch (error) {
    console.error('Database Error (GET /api/invoices):', error);
    return NextResponse.json({ message: 'Failed to fetch invoices.' }, { status: 500 });
  }
}

/**
 * Handles POST requests to /api/invoices.
 * Receives new invoice data and inserts it into the database.
 */
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate and Destructure data from the request body
    const { 
      date, 
      title, 
      description = '', // Default to empty string if missing
      amount, 
      store_name = '', // Default to empty string if missing
      type, 
      category = 'General', // Default category
      has_receipt = false, 
      has_invoice = false,
    } = data;

    // Basic validation
    if (!title || !amount || !type) {
        return NextResponse.json({ message: 'Missing required fields: title, amount, and type are mandatory.' }, { status: 400 });
    }

    // Execute the INSERT query using parameterized values for security
    await sql`
      INSERT INTO invoices (
        date, 
        title, 
        description, 
        amount, 
        store_name, 
        type, 
        category, 
        has_receipt, 
        has_invoice
      )
      VALUES (
        ${date || null}, 
        ${title}, 
        ${amount}, 
        ${store_name}, 
        ${type}, 
        ${category}, 
        ${has_receipt}, 
        ${has_invoice}
      );
    `;

    // Return a 201 status code for successful creation
    return NextResponse.json({ message: 'Invoice added successfully.' }, { status: 201 });

  } catch (error) {
    console.error('Database Error (POST /api/invoices):', error);
    // You can inspect the error details if needed, but return a generic 500
    return NextResponse.json({ message: 'Failed to save invoice to the database.' }, { status: 500 });
  }
}
