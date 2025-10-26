'use client';

import { useRouter } from 'next/navigation';

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    textAlign: 'center' as 'center',
    color: '#f0f4f8',
    padding: '20px',
  },
  logo: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#4CAF50', // Green color for "Cucumber" theme
    marginBottom: '40px',
    border: '4px solid #4CAF50',
    padding: '10px 20px',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  },
  welcomeHeader: {
    fontSize: '3.5rem',
    marginBottom: '10px',
    fontWeight: '700',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
  },
  welcomeMessage: {
    fontSize: '1.4rem',
    marginBottom: '40px',
    fontWeight: '300',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'center' as 'center',
  },
  buttonBase: {
    fontFamily: 'Lalezar, Tahoma, sans-serif',
    padding: '15px 30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s, background-color 0.2s',
    border: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
  invoicesButton: {
    backgroundColor: '#4CAF50', // Green for viewing/management
    color: 'white',
  },
  addButton: {
    backgroundColor: '#007bff', // Blue for adding new items
    color: 'white',
  },
};


// Utility functions to handle hover (since we use inline styles)
const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.transform = 'translateY(-2px)';
  e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.3)';
  e.currentTarget.style.backgroundColor = e.currentTarget.name === 'invoices' ? '#45a049' : '#0056b3';
};

const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
  e.currentTarget.style.backgroundColor = e.currentTarget.name === 'invoices' ? '#4CAF50' : '#007bff';
};


export default function HomePage() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      {/* Centered Logo Text */}
      <div style={styles.logo}>
        نرم افزار خیار حسابدار 🥒
      </div>

      <h1 style={styles.welcomeHeader}>
        به سامانه حسابداری **خیار** خوش آمدید! 👋
      </h1>
      <p style={styles.welcomeMessage}>
        مدیریت فاکتورها، گزارش‌گیری و ردیابی آسان حساب‌ها.
      </p>

      <div style={styles.buttonContainer}>
        {/* Go To Invoices Button */}
        <button
          name="invoices"
          onClick={() => router.push('/invoices')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ ...styles.buttonBase, ...styles.invoicesButton as React.CSSProperties }}
        >
          مشاهده لیست فاکتورها
        </button>

        {/* Add New Invoice Button */}
        <button
          name="add-invoice"
          onClick={() => router.push('/add-invoice')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ ...styles.buttonBase, ...styles.addButton as React.CSSProperties }}
        >
          افزودن فاکتور جدید
        </button>
      </div>
    </div>
  );
}