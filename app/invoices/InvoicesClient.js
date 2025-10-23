// app/invoices/InvoicesClient.js

'use client'; // 👈 CRITICAL: Enables useState, useRouter, etc.

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // 👈 NEW: Correct App Router import
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import * as XLSX from 'xlsx';
import moment from 'moment-jalaali';

// Removed: import pool from '../lib/db'; // DB logic is no longer here

function toPersianNumber(number) {
  if (!number && number !== 0) return '';
  return number.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

function fixDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  d.setHours(d.getHours() + 24);
  return d;
}

function toPersianDate(dateStr) {
  const d = fixDate(dateStr);
  return moment(d).format('jYYYY/jMM/jDD');
}

// Renamed component
export default function InvoicesClient({ initialInvoices }) {
  const router = useRouter();
  const [filters, setFilters] = useState({
    date: null,
    minPrice: '',
    maxPrice: '',
    type: '',
    category: '',
    title: '',
    store_name: '',
    has_receipt: '',
    has_invoice: ''
  });

  const filteredInvoices = initialInvoices.filter(inv => {
    let match = true;

    if (filters.minPrice) match = match && inv.amount >= Number(filters.minPrice);
    if (filters.maxPrice) match = match && inv.amount <= Number(filters.maxPrice);

    if (filters.date) {
      const selectedDate = moment(filters.date.toDate());
      const invoiceDate = moment(fixDate(inv.date));
      match = match && selectedDate.isSame(invoiceDate, 'day');
    }

    if (filters.type) match = match && inv.type === filters.type;
    if (filters.category) match = match && inv.category === filters.category;
    if (filters.title) match = match && inv.title?.toLowerCase().includes(filters.title.toLowerCase());
    if (filters.store_name) match = match && inv.store_name?.toLowerCase().includes(filters.store_name.toLowerCase());

    if (filters.has_receipt) match = match && Boolean(inv.has_receipt) === (filters.has_receipt === 'true');
    if (filters.has_invoice) match = match && Boolean(inv.has_invoice) === (filters.has_invoice === 'true');

    return match;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleDateChange = (date) => {
    setFilters({ ...filters, date });
  };

  const resetFilters = () => {
    setFilters({
      date: null,
      minPrice: '',
      maxPrice: '',
      type: '',
      category: '',
      title: '',
      store_name: '',
      has_receipt: '',
      has_invoice: ''
    });
  };

  const exportToExcel = () => {
    const data = filteredInvoices.map(inv => ({
      ID: inv.id,
      تاریخ: toPersianDate(inv.date),
      عنوان: inv.title,
      مبلغ: inv.amount,
      'نام فروشگاه': inv.store_name,
      نوع: inv.type,
      توضیحات: inv.description,
      دسته: inv.category,
      رسید: inv.has_receipt ? 'دارد' : 'ندارد',
      فاکتور: inv.has_invoice ? 'دارد' : 'ندارد',
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Invoices');
    XLSX.writeFile(wb, 'invoices.xlsx');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>لیست فاکتورها</h2>

      <div style={styles.filters}>
        <div style={styles.filterGroup}>
          <label>تاریخ:</label>
          <DatePicker
            calendar={persian}
            value={filters.date}
            onChange={handleDateChange}
            placeholder="انتخاب تاریخ"
            style={styles.datePicker}
          />
        </div>

        <div style={styles.filterGroup}>
          <label>حداقل مبلغ:</label>
          <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} style={styles.input} />
        </div>

        <div style={styles.filterGroup}>
          <label>حداکثر مبلغ:</label>
          <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} style={styles.input} />
        </div>

        <div style={styles.filterGroup}>
          <label>نوع:</label>
          <select name="type" value={filters.type} onChange={handleFilterChange} style={styles.input}>
            <option value="">همه</option>
            <option value="مصرفی">مصرفی</option>
            <option value="اموال">اموال</option>
            <option value="مصرفی-اموال">مصرفی-اموال</option>
          </select>
        </div>

        <div style={styles.filterGroup}>
          <label>دسته:</label>
          <select name="category" value={filters.category} onChange={handleFilterChange} style={styles.input}>
            <option value="">همه</option>
            <option value="IMP">IMP</option>
            <option value="Milling CNC">Milling CNC</option>
            <option value="PPS">PPS</option>
            <option value="General">مشترک</option>
          </select>
        </div>

        <div style={styles.filterGroup}>
          <label>عنوان:</label>
          <input type="text" name="title" value={filters.title} onChange={handleFilterChange} style={styles.input} />
        </div>

        <div style={styles.filterGroup}>
          <label>نام فروشگاه:</label>
          <input type="text" name="store_name" value={filters.store_name} onChange={handleFilterChange} style={styles.input} />
        </div>

        <div style={styles.filterGroup}>
          <label>رسید:</label>
          <select name="has_receipt" value={filters.has_receipt} onChange={handleFilterChange} style={styles.input}>
            <option value="">همه</option>
            <option value="true">دارد</option>
            <option value="false">ندارد</option>
          </select>
        </div>

        <div style={styles.filterGroup}>
          <label>فاکتور:</label>
          <select name="has_invoice" value={filters.has_invoice} onChange={handleFilterChange} style={styles.input}>
            <option value="">همه</option>
            <option value="true">دارد</option>
            <option value="false">ندارد</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
          <button onClick={() => router.push('/add-invoice')} style={styles.addButton}>افزودن فاکتور</button>
          <button onClick={exportToExcel} style={styles.exportButton}>خروجی اکسل</button>
          <button onClick={resetFilters} style={styles.resetButton}>ریست فیلتر</button>
        </div>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              {['ID','تاریخ','عنوان','مبلغ','نام فروشگاه','نوع','توضیحات','دسته','رسید','فاکتور'].map(h => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((inv, index) => {
              const rowGreen = inv.has_receipt && inv.has_invoice;
              return (
                <tr key={inv.id} style={{
                  ...styles.tr,
                  backgroundColor: rowGreen ? '#d4edda' : index % 2 === 0 ? '#f9f9f9' : '#f0f4f8'
                }}>
                  <td style={styles.td}>{toPersianNumber(inv.id)}</td>
                  <td style={styles.td}>{toPersianDate(inv.date)}</td>
                  <td style={styles.td}>{inv.title || '-'}</td>
                  <td style={styles.td}>{toPersianNumber(inv.amount)} ریال</td>
                  <td style={styles.td}>{inv.store_name || '-'}</td>
                  <td style={styles.td}>{inv.type || '-'}</td>
                  <td style={styles.td}>{inv.description || '-'}</td>
                  <td style={styles.td}>{inv.category || '-'}</td>
                  <td style={{ ...styles.td, color: inv.has_receipt ? 'green' : 'red' }}>{inv.has_receipt ? 'دارد' : 'ندارد'}</td>
                  <td style={{ ...styles.td, color: inv.has_invoice ? 'green' : 'red' }}>{inv.has_invoice ? 'دارد' : 'ندارد'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// app/invoices/InvoicesClient.js (Scroll to the bottom and replace the 'styles' object)

// app/invoices/InvoicesClient.js (Replace the existing 'styles' object)
// app/invoices/InvoicesClient.js (Replace the existing 'styles' object)

const styles = {
    container: { 
      maxWidth: '1200px', 
      margin: '30px auto', 
      fontFamily: 'Lalezar, Tahoma, sans-serif',
      color: '#333' 
    },
    heading: { 
      textAlign: 'center', 
      marginBottom: '20px', 
      color: '#fff', 
      fontSize: '30px' 
    },
    
    // --- Centering Fix for Filter Section ---
    filters: { 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '15px', 
      marginBottom: '20px', 
      
      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',      
      color: '#333',                               
      
      direction: 'rtl',                             
      // ------------------------------------
      // *** KEY CHANGE HERE: Center content ***
      justifyContent: 'center',                   
      // ------------------------------------
      alignItems: 'flex-end',                       
      
      padding: '15px', 
      borderRadius: '10px',
    },
    filterGroup: { 
      display: 'flex', 
      flexDirection: 'column', 
      minWidth: '150px',
      textAlign: 'right', 
    },
    // --- End Filter Section Fix ---
    
    input: { 
      padding: '8px', 
      borderRadius: '5px', 
      border: '1px solid #ccc', 
      fontFamily: 'Lalezar, Tahoma, sans-serif',
      fontSize: '14px', 
      textAlign: 'right' 
    },
    datePicker: { 
      padding: '8px', 
      borderRadius: '5px', 
      border: '1px solid #ccc', 
      fontSize: '14px' 
    },
    
    addButton: { padding: '10px 15px',
    fontFamily: 'Lalezar, Tahoma, sans-serif',
    backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    exportButton: { padding: '10px 15px',
    fontFamily: 'Lalezar, Tahoma, sans-serif',
    backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    resetButton: { padding: '10px 15px',
    fontFamily: 'Lalezar, Tahoma, sans-serif',
    backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    
    // Table styles
    tableWrapper: { overflowX: 'auto', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '10px', backgroundColor: 'white' },
    table: { width: '100%', borderCollapse: 'collapse', textAlign: 'right', minWidth: '900px' },
    thead: { backgroundColor: '#4a90e2', color: '#fff' },
    th: { padding: '12px', border: '1px solid #e2e8f0' },
    tr: { transition: 'background-color 0.2s' },
    td: { padding: '10px', border: '1px solid #e2e8f0', color: '#34495e', textAlign: 'right' }
  };