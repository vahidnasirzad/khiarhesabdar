// lib/actions.js
'use server';
import { prisma } from './prisma';
import { revalidatePath } from 'next/cache';

/**
 * Forces Next.js to re-fetch data for the invoices listing page 
 * by clearing the static cache for that path.
 */
export async function revalidateInvoices() {
  // This is the path of the Server Component we want to re-run
  revalidatePath('/invoices'); 
}

// --- NEW: Delete Invoice Server Action ---
export async function deleteInvoice(id) {
  try {
      await prisma.invoice.delete({
          where: {
              id: id,
          },
      });

      // Revalidate the list page to show the deletion instantly
      revalidatePath('/invoices'); 
      
      return { success: true, message: 'فاکتور با موفقیت حذف شد.' };
  } catch (error) {
      console.error('Error deleting invoice:', error);
      return { success: false, message: 'خطا در حذف فاکتور.' };
  }
}