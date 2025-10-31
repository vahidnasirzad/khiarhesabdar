// app/login/page.tsx
'use client';

import { useState, FormEvent } from 'react'; 
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/actions'; 

// Define the exact type structure of the Server Action's return value
type ActionResult = {
  success: boolean;
  message: string;
}

export default function LoginPage() {
  const router = useRouter();
  // 🟢 Explicitly type state for TypeScript compliance
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  // 🟢 Explicitly type the event object to prevent "implicit any" error
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      // 🤝 Call the Server Action with credentials
      const result: ActionResult = await loginUser(username, password);

      if (result.success) {
        // Login successful → Redirect to the protected page
        // The middleware will handle redirects based on the session cookie
        router.push('/invoices'); 
      } else {
        // Login failed (show the secure generic message from the server)
        setError(result.message);
      }
    } catch (err) {
      console.error(err);
      setError('خطای سرور: مشکل در ارتباط.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>ورود به خیار حسابدار</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.fieldGroup}>
          <label htmlFor="username" style={styles.label}>نام کاربری:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label htmlFor="password" style={styles.label}>رمز عبور:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        
        <button type="submit" style={styles.submitButton}>ورود</button>
        {error && <p style={styles.messageError}>{error}</p>}
      </form>
    </div>
  );
}

// ------------------------------------------------------------------
// 💅 STYLES DEFINITION (Matching the create-user page design)
// ------------------------------------------------------------------

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '450px',
    margin: '100px auto', // Center the login box higher up
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#f8f9fa', // Light gray background for contrast
    border: '1px solid #e0e0e0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    borderBottom: '2px solid #007bff', 
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
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#007bff', 
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    marginTop: '10px',
  },
  messageError: {
    marginTop: '20px',
    padding: '12px',
    backgroundColor: '#ffebe6', 
    color: '#cc0000', 
    border: '1px solid #ffb7b7',
    borderRadius: '6px',
    textAlign: 'center',
  },
};