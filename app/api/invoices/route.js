// app/api/invoices/route.js

import { NextResponse } from 'next/server';
import  prisma  from '../../../lib/prisma'; // 🚨 Ensure this path is correct for your project structure

/**
 * Handles POST requests to /api/invoices.
 * Inserts a new invoice record into the Neon database via Prisma.
 * @param {Request} request - The incoming Next.js request object
 * @returns {NextResponse}
 */
export async function POST(request) {
  try {
    // 1. Parse the request body
    const data = await request.json();
    
    // 2. Destructure and validate required fields
    const { 
      date, 
      title, 
      description = '', 
      amount, 
      store_name = '', 
      type, 
      category = 'General', 
      has_receipt = false, 
      has_invoice = false,
    } = data;

    // Basic validation check
    if (!title || !amount || !type) {
        return NextResponse.json({ message: 'Missing required fields: title, amount, and type are mandatory.' }, { status: 400 });
    }

    // 3. Prepare data for Prisma
    const numericAmount = parseFloat(amount);
    
    // Validate amount conversion
    if (isNaN(numericAmount)) {
        return NextResponse.json({ message: 'Amount must be a valid number.' }, { status: 400 });
    }
    
    // 4. Execute the INSERT query using Prisma
    const newInvoice = await prisma.invoice.create({
        data: {
            // Convert date string (YYYY-MM-DD) back to a Date object for the database
            date: date ? new Date(date) : null, 
            title,
            description,
            amount: numericAmount, // Saved as a numeric type (e.g., Decimal/Float)
            store_name,
            type,
            category,
            has_receipt,
            has_invoice,
        }
    });

    // 5. Return success response
    return NextResponse.json({ 
        message: 'Invoice added successfully.', 
        invoice: newInvoice 
    }, { status: 201 });

  } catch (error) {
    // 6. Log and return error response
    console.error('Prisma Database Error (POST /api/invoices):', error);
    return NextResponse.json({ message: 'Failed to save invoice to the database.' }, { status: 500 });
  }
}

// NOTE: We do not include a GET function here because the initial data fetch is 
// handled directly by the Server Component (app/invoices/page.js) using Prisma for better performance.