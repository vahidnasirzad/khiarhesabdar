// app/create-user/page.tsx
'use client';

import { useState } from 'react';
import { createUser } from '@/lib/actions'; 

// Define the exact type structure of the Server Action's return value
type ActionResult = {
  success: boolean;
  message: string;
}

export default function CreateUserPage() {
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = async (formData: FormData): Promise<void> => {
    setMessage('');
    setIsSuccess(false);

    const result: ActionResult = await createUser(formData);

    if (result.success) {
      setIsSuccess(true);
      // Optional: Clear form fields here if desired
    } else {
      setIsSuccess(false);
    }
    setMessage(result.message);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>ساخت کاربر جدید</h2>
      
      <form action={handleSubmit} style={styles.form}> 
        
        <div style={styles.fieldGroup}>
          <label htmlFor="username" style={styles.label}>نام کاربری:</label>
          <input 
            id="username" 
            name="username" 
            type="text" 
            required 
            style={styles.input} 
          />
        </div>

        <div style={styles.fieldGroup}>
          <label htmlFor="password" style={styles.label}>رمز عبور:</label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            required 
            style={styles.input} 
          />
        </div>

        <div style={styles.fieldGroup}>
          <label htmlFor="role" style={styles.label}>سطح دسترسی:</label>
          <select 
            id="role" 
            name="role" 
            required 
            style={styles.select}
          >
            <option value="USER">کاربر عادی</option>
            <option value="ADMIN">مدیر (Admin)</option>
            <option value="SUPERUSER">مدیر ارشد (Superuser)</option>
          </select>
        </div>

        <button type="submit" style={styles.submitButton}>
          ثبت کاربر
        </button>
        
        {message && (
          <p style={isSuccess ? styles.messageSuccess : styles.messageError}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

// ------------------------------------------------------------------
// 💅 STYLES DEFINITION
// ------------------------------------------------------------------

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '450px',
    margin: '60px auto',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#333',
    borderBottom: '2px solid #007bff', // Primary color border
    paddingBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
  },
  select: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#007bff', // Primary Blue
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    marginTop: '10px',
  },
  messageSuccess: {
    marginTop: '20px',
    padding: '12px',
    backgroundColor: '#e6ffed', // Light Green
    color: '#00611f', // Dark Green
    border: '1px solid #b7e4c7',
    borderRadius: '6px',
    textAlign: 'center',
  },
  messageError: {
    marginTop: '20px',
    padding: '12px',
    backgroundColor: '#ffebe6', // Light Red
    color: '#cc0000', // Dark Red
    border: '1px solid #ffb7b7',
    borderRadius: '6px',
    textAlign: 'center',
  },
};