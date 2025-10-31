// lib/actions.js
'use server';
import prisma from './prisma';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';







const SESSION_TOKEN_NAME = 'app_session';
const SESSION_EXPIRY_SECONDS = 60 * 60 * 24 * 7; // 7 days


// =======================================================
// A. USER CREATION ACTION (Pure JavaScript)
// =======================================================
// We rely on the implicit typing of the FormData object passed by the form
export async function createUser(formData) {
    
  // Safely extract values and ensure they are strings
  const username = formData.get('username') ? String(formData.get('username')) : '';
  const password = formData.get('password') ? String(formData.get('password')) : '';
  const roleString = formData.get('role') ? String(formData.get('role')) : '';

  // Simple validation
  if (!username || !password || !roleString) {
      return { success: false, message: 'همه فیلدها الزامی هستند.' };
  }
  
  // Ensure role matches your Prisma Enum values (USER, ADMIN, SUPERUSER)
  const validRoles = ['USER', 'ADMIN', 'SUPERUSER'];
  if (!validRoles.includes(roleString)) {
       return { success: false, message: 'سطح دسترسی نامعتبر است.' };
  }
  
  // CRITICAL: Hash the password securely
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
      await prisma.user.create({
          data: {
              username: username,
              hashedPassword: hashedPassword,
              // Prisma will accept the string if it matches the Enum name
              role: roleString, 
          },
      });
      
      return { success: true, message: `کاربر ${username} با موفقیت ایجاد شد.` };
  } catch (error) { // The error object is implicitly 'any' but is valid JS
      
      // Check for unique constraint violation (P2002 is the Prisma code for unique constraint)
      if (error && error.code === 'P2002') {
           return { success: false, message: 'نام کاربری قبلا ثبت شده است.' };
      }
      
      console.error("User Creation Error:", error);
      return { success: false, message: 'خطا در ذخیره کاربر.' };
  }
}

// =======================================================
// B. LOGIN ACTION (Updated for JS and Username Storage)
// =======================================================
export async function loginUser(username, password) {
    try {
        // 1. Find the user by username
        const user = await prisma.user.findFirst({
            where: { username },
        });

        // 2. Security Check 1: User not found
        if (!user) {
            return { success: false, message: 'نام کاربری یا رمز عبور اشتباه است.' };
        }

        // 3. Security Check 2: Verify the HASHED password
        const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

        if (!isPasswordValid) {
            return { success: false, message: 'نام کاربری یا رمز عبور اشتباه است.' };
        }

        // 4. Create and Set Secure Session Cookie (httpOnly is CRITICAL)
        
        // 🟢 FIX 1: Create a session object containing user details
        const sessionPayload = JSON.stringify({
            userId: user.id.toString(),
            username: user.username, // 👈 Store the username
        }); 

        // 🟢 FIX 2: Store the JSON payload instead of just the ID
        // Note: We use cookies().set() as a function call here, as required for Server Actions
        cookies().set(SESSION_TOKEN_NAME, sessionPayload, { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            maxAge: SESSION_EXPIRY_SECONDS, 
            path: '/',
            sameSite: 'Lax',
        });

        return { success: true, message: 'ورود موفقیت‌آمیز.' };

    } catch (error) {
        console.error('Login Server Error:', error);
        return { success: false, message: 'خطای سرور ناشناخته.' };
    }
}

// =======================================================
// C. LOGOUT ACTION
// =======================================================
export async function logoutUser() {
    'use server';
    
    try {
        // 1. Delete the secure HTTP-only session cookie
        cookies().delete(SESSION_TOKEN_NAME); 
        
        // 2. You might optionally want to redirect here, but client-side redirect is cleaner.
        
        return { success: true, message: 'خروج موفقیت‌آمیز.' };
    } catch (error) {
        console.error("Logout Error:", error);
        return { success: false, message: 'خطا در خروج.' };
    }
}


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