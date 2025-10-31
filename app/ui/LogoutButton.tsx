// ui/LogoutButton.tsx
'use client';

import { useRouter } from 'next/navigation';
import { logoutUser } from '@/lib/actions'; 

const buttonStyle: React.CSSProperties = {
  padding: '8px 15px',
  backgroundColor: '#dc3545', // Red for logout/danger
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '600',
  transition: 'background-color 0.2s',
  marginRight: '15px' 
};

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    // 1. Call the Server Action to clear the cookie
    const result = await logoutUser(); 

    if (result.success) {
      // 2. Redirect the user to the login page after success
      router.push('/login');
    } else {
      console.error(result.message);
      alert('خطا در خروج. لطفاً دوباره تلاش کنید.');
    }
  };

  return (
    <button onClick={handleLogout} style={buttonStyle}>
      خروج از حساب
    </button>
  );
}