// app/add-invoice/page.tsx

'use client'; 
import React, { useState, CSSProperties, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation'; 
import DatePicker, { DateObject } from 'react-multi-date-picker'; 
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import gregorian from 'react-date-object/calendars/gregorian';
import moment from 'moment-jalaali';

// FIX: Define a type for the styles object using a Record type
type StyleMap = Record<string, CSSProperties>;

export default function AddInvoice() {
  const router = useRouter();
  // State for form fields
  const [form, setForm] = useState({
    date: new Date(),
    title: '',
    description: '',
    amount: '',
    store_name: '',
    type: '',
    category: '',
    has_receipt: false,
    has_invoice: false,
  });

  // State for button lock and errors
  const [shamsiPreview, setShamsiPreview] = useState(moment(form.date).format('jYYYY/jMM/jDD'));
  const [error, setError] = useState('');
  // 💥 NEW STATE: Controls the disabled state of the submit button
  const [isSubmitting, setIsSubmitting] = useState(false); 

  // FIX: Use ChangeEvent with a union type and safe type assertion for 'checked'
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  // FIX: Type dateObj using the imported DateObject type and include null
  const handleDateChange = (dateObj: DateObject | null) => {
    if (!dateObj) return;

    // Convert Shamsi → Gregorian
    const gregorianDate = dateObj.convert(gregorian).toDate();
    setForm({ ...form, date: gregorianDate });

    const shamsi = moment(gregorianDate).format('jYYYY/jMM/jDD');
    setShamsiPreview(shamsi);

    console.log('📅 Gregorian (for DB):', moment(gregorianDate).format('YYYY-MM-DD'));
    console.log('🗓️ Shamsi preview:', shamsi);
  };

  // FIX: Explicitly type 'e' as a React Form Event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 💥 1. Check if submission is currently locked
    if (isSubmitting) return;

    // 💥 2. Lock the button immediately
    setIsSubmitting(true);
    setError('');

    // 💥 3. Start the 5-second cooldown timer
    const COOLDOWN_MS = 5000;
    const timeoutId = setTimeout(() => {
        console.log(`✅ Cooldown finished. Re-enabling submit button after ${COOLDOWN_MS / 1000} seconds.`);
        setIsSubmitting(false);
    }, COOLDOWN_MS);

    try {
      // Sending the Gregorian date in standard YYYY-MM-DD format for API route to consume
      const payload = { ...form, date: moment(form.date).format('YYYY-MM-DD') };
      
      const res = await fetch('/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        // Clear the cooldown timer if successful, as we are navigating away
        clearTimeout(timeoutId); 
        router.push('/invoices');
      } else {
        const data = await res.json();
        setError(data.message || 'خطا در ثبت فاکتور');
        // If submission fails, the cooldown will still finish in 5 seconds
      }
    } catch (err) {
      console.error(err);
      setError('خطا در اتصال به سرور');
      // If fetch fails completely, the cooldown will still finish in 5 seconds
    }
    
    // Note: The button is re-enabled by the setTimeout, not a final state update here.
  };

  return (
    <div style={styles.container}>
      <button 
        onClick={() => router.push('/invoices')} 
        style={styles.backButton}
      >
        لیست فاکتورها 📋
      </button>


      <h2 style={styles.heading}>افزودن فاکتور</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

        <div style={styles.formGroup}>
          <label style={styles.label}>تاریخ:</label>
          <DatePicker
            value={shamsiPreview}
            onChange={handleDateChange}
            calendar={persian}
            locale={persian_fa}
            format="YYYY/MM/DD"
            style={styles.datePickerInput}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>عنوان:</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} style={styles.input} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>توضیحات:</label>
          <input type="text" name="description" value={form.description} onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>مبلغ (ریال):</label>
          <input type="number" name="amount" value={form.amount} onChange={handleChange} style={styles.input} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>نام فروشگاه:</label>
          <input type="text" name="store_name" value={form.store_name} onChange={handleChange} style={styles.input} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>نوع:</label>
          <select name="type" value={form.type} onChange={handleChange} style={styles.input} required>
            <option value="">انتخاب نوع</option>
            <option value="مصرفی">مصرفی</option>
            <option value="اموال">اموال</option>
            <option value="مصرفی-اموال">مصرفی-اموال</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>دسته:</label>
          <select name="category" value={form.category} onChange={handleChange} style={styles.input} required>
            <option value="">انتخاب دسته</option>
            <option value="IMP">IMP</option>
            <option value="Milling CNC">Milling CNC</option>
            <option value="PPS">PPS</option>
            <option value="General">General</option>
          </select>
        </div>

        <div style={styles.formGroupCheckbox}>
          <label>
            <input type="checkbox" name="has_receipt" checked={form.has_receipt} onChange={handleChange} />
            رسید دارد
          </label>
        </div>

        <div style={styles.formGroupCheckbox}>
          <label>
            <input type="checkbox" name="has_invoice" checked={form.has_invoice} onChange={handleChange} />
            فاکتور دارد
          </label>
        </div>

        {/* 💥 4. Disable the button when isSubmitting is true */}
        <button 
            type="submit" 
            style={{...styles.button, opacity: isSubmitting ? 0.6 : 1}} 
            disabled={isSubmitting}
        >
            {isSubmitting ? 'در حال ثبت... لطفا صبر کنید ' : 'ثبت فاکتور'}
        </button>
        
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}


// FIX: Apply the StyleMap type to the styles object definition
const styles: StyleMap = {
  container: { 
    maxWidth: '600px', 
    margin: '50px auto', 
    padding: '30px', 
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)', 
    color: '#333', 
  },
  heading: { textAlign: 'center', marginBottom: '20px', color: '#333' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  formGroup: { display: 'flex', flexDirection: 'column' },
  formGroupCheckbox: { marginBottom: '10px' },
  label: { marginBottom: '5px', fontWeight: 'bold', color: '#555' },
  input: { padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' },
  button: { padding: '12px',
    fontFamily: 'Lalezar, Tahoma, sans-serif',
    borderRadius: '5px', border: 'none', backgroundColor: 'green', color: 'white', fontSize: '16px', cursor: 'pointer',
    transition: 'opacity 0.3s' // Added transition for smoother visual change
  },
  error: { color: 'red', marginTop: '10px' },

  backButton: { 
    padding: '12px', 
    borderRadius: '5px', 
    border: 'none', 
    backgroundColor: '#4a90e2', 
    color: 'white', 
    fontSize: '16px', 
    cursor: 'pointer',
    fontFamily: 'Lalezar, Tahoma, sans-serif',
    marginTop: '10px',
  },
  
  // FIX: Moved inline style from DatePicker to the styles object
  datePickerInput: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  }
};
