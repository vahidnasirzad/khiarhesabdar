// lib/actions.js
'use server';

import { revalidatePath } from 'next/cache';

/**
 * Forces Next.js to re-fetch data for the invoices listing page 
 * by clearing the static cache for that path.
 */
export async function revalidateInvoices() {
  // This is the path of the Server Component we want to re-run
  revalidatePath('/invoices'); 
}