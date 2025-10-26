// app/invoices/InvoicesClient.js
'use client'; 

import React, { useState, useMemo, useCallback } from 'react';
import * as XLSX from 'xlsx'; // 👈 NEW IMPORT for Excel
import { saveAs } from 'file-saver'; // 👈 NEW IMPORT for file download
import { revalidateInvoices } from '../../lib/actions'; 
import { useRouter } from 'next/navigation';
import DeleteInvoiceButton from './DeleteInvoiceButton'; // 👈 NEW IMPORT

// --- Icon Definitions ---
const ICON_CHECK = '✅';
const ICON_X = '❌';

// --- Styles Definition (Matching your provided HTML inline styles) ---
const styles = {
    // Main Container
    container: {
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        color: '#333',
        fontFamily: 'Tahoma, sans-serif',
        textAlign: 'right'
    },
    // Header
    headerContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
    },
    heading: {
        margin: 0,
        color: '#1a4f1a',
        marginLeft: 'auto',
        paddingRight: '15px'
    },
    // Add Button (The '+' button)
    addButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '24px',
        lineHeight: 1,
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'background-color 0.2s',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        fontFamily: 'Tahoma, sans-serif',
        fontWeight: 'bold',
        flexShrink: 0
    },
    // Filter Row
    filterRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '15px',
        gap: '15px'
    },
    filterInput: {
        padding: '10px 15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        flexGrow: 1,
        minWidth: '200px',
        boxSizing: 'border-box',
        textAlign: 'right',
        fontFamily: 'Tahoma, sans-serif'
    },
    filterSelect: {
        padding: '10px 15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minWidth: '150px',
        fontFamily: 'Tahoma, sans-serif',
        textAlignLast: 'right',
        direction: 'rtl'
    },
    // Status Buttons Row
    statusRow: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '15px',
        gap: '15px'
    },
    buttonGroup: {
        display: 'flex',
        gap: '2px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #ccc',
        backgroundColor: '#f5f5f5'
    },
    // Base button style for status toggles
    statusButtonBase: {
        padding: '8px 12px',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#555',
        cursor: 'pointer',
        fontFamily: 'Tahoma, sans-serif',
        transition: 'background-color 0.2s, color 0.2s',
        fontSize: '0.9em',
        minWidth: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        borderLeft: 'none'
    },
    // Active button style for status toggles
    statusButtonActive: {
        backgroundColor: '#007bff',
        color: 'white',
    },
    // Table
    tableContainer: {
        overflowX: 'auto',
        width: '100%',
        marginTop: '20px'
    },
    table: {
        width: 'auto',
        minWidth: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.85em',
        direction: 'rtl'
    },
    tableHead: {
        backgroundColor: '#4CAF50',
        color: 'white'
    },
    tableHeaderCell: {
        padding: '12px 10px',
        textAlign: 'center',
        borderBottom: '2px solid #ddd',
        whiteSpace: 'nowrap'
    },
    tableDataCell: {
        padding: '10px 10px',
        textAlign: 'center',
        verticalAlign: 'top',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid #eee'
    },
    descriptionCell: {
        cursor: 'pointer',
        maxWidth: '150px',
        position: 'relative',
        whiteSpace: 'normal',
    },
    descriptionText: {
        display: 'block',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 'none',
        padding: 0,
        lineHeight: '1.4em',
        position: 'relative',
        zIndex: 1,
        left: 'auto',
        transform: 'none',
        minWidth: 'auto',
        textAlign: 'right'
    },
};
// --- END Styles Definition ---

// Utility function to format amount with Iranian locale
const formatAmount = (amount) => {
    // Note: Assuming amount is passed as a string from the server component
    return amount ? Number(amount).toLocaleString('fa-IR') : '0';
};

// Utility function to get status icon
const getStatusIcon = (status) => {
    return status ? ICON_CHECK : ICON_X;
};

export default function InvoicesClient({ initialInvoices }) {
    const router = useRouter();

    // --- State Management ---
    const [invoicesList] = useState(initialInvoices || []);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [receiptStatus, setReceiptStatus] = useState('all');
    const [invoiceStatus, setInvoiceStatus] = useState('all');
    const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    // --- Actions ---

    const toggleDescription = useCallback((id) => {
        // Toggle the description expansion
        setExpandedDescriptionId(prevId => prevId === id ? null : id);
    }, []);
    
    const refreshDataAndState = useCallback(async () => {
        setIsRefreshing(true);
        try {
            // Call Server Action to clear the cache of the parent Server Component
            await revalidateInvoices(); 
            
            // Manually trigger a full window reload to force the Server Component to re-run
            window.location.reload(); 
        } catch (e) {
            console.error("Failed to trigger refresh:", e);
            setIsRefreshing(false);
        }
    }, []); 


    

    // --- Filtering and Sorting Logic ---
    const { uniqueCategories, uniqueTypes, filteredInvoices } = useMemo(() => {
        const categories = new Set(['همه دسته ها']);
        const types = new Set(['همه انواع']);

        invoicesList.forEach(invoice => {
            categories.add(invoice.category);
            types.add(invoice.type);
        });

        let result = invoicesList.filter(invoice => {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();

            // 1. Search Filter (Title, Store Name, Date, Description)
            const matchesSearch = lowerCaseSearchTerm === '' ||
                invoice.title.toLowerCase().includes(lowerCaseSearchTerm) ||
                invoice.store_name.toLowerCase().includes(lowerCaseSearchTerm) ||
                invoice.date.includes(lowerCaseSearchTerm) ||
                (invoice.description || '').toLowerCase().includes(lowerCaseSearchTerm);

            // 2. Category Filter
            const matchesCategory = selectedCategory === 'all' || invoice.category === selectedCategory;

            // 3. Type Filter
            const matchesType = selectedType === 'all' || invoice.type === selectedType;

            // 4. Receipt Status Filter
            const matchesReceipt = receiptStatus === 'all' || 
                                   (receiptStatus === 'has' && invoice.has_receipt) ||
                                   (receiptStatus === 'missing' && !invoice.has_receipt);

            // 5. Invoice Status Filter
            const matchesInvoice = invoiceStatus === 'all' || 
                                   (invoiceStatus === 'has' && invoice.has_invoice) ||
                                   (invoiceStatus === 'missing' && !invoice.has_invoice);

            return matchesSearch && matchesCategory && matchesType && matchesReceipt && matchesInvoice;
        });

        // Client-Side Sorting (By Jalaali Date Descending)
        result.sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            return 0;
        });

        return {
            uniqueCategories: Array.from(categories),
            uniqueTypes: Array.from(types),
            filteredInvoices: result
        };
    }, [invoicesList, searchTerm, selectedCategory, selectedType, receiptStatus, invoiceStatus]);

    

    // --- Excel Export Action ---
    const exportToExcel = useCallback(() => {
        if (!filteredInvoices.length) {
            alert("هیچ فاکتوری برای خروجی گرفتن وجود ندارد.");
            return;
        }
        
        // 1. Prepare Data for Export
        const exportData = filteredInvoices.map(invoice => ({
            'تاریخ': invoice.date,
            'نام فروشگاه': invoice.store_name,
            'عنوان': invoice.title,
            'مبلغ (ریال)': Number(invoice.amount), // Convert back to number for proper Excel formatting
            'نوع': invoice.type,
            'دسته': invoice.category,
            'توضیحات': invoice.description,
            'دارای رسید': invoice.has_receipt ? 'بله' : 'خیر',
            'دارای فاکتور': invoice.has_invoice ? 'بله' : 'خیر',
            'شناسه': invoice.id,
        }));

        // 2. Create Workbook
        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'فاکتورها');
        
        // Optional: Auto-fit column widths (Requires complex setup, but this is a good starting point)
        
        // 3. Generate File and Download
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        const fileName = `KHIAR_HESABDAR_Invoices_${new Date().toLocaleDateString('fa-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-')}.xlsx`;
        
        saveAs(data, fileName);
    }, [filteredInvoices]);

    // ... rest of the component


    return (
        <div style={styles.container}>
            {/* --- HEADER AND ADD BUTTON --- */}
            <div style={styles.headerContainer}>
                <h2 style={styles.heading}>لیست فاکتورها</h2>
                <a 
                    href="/add-invoice" 
                    style={styles.addButton}
                    title="افزودن فاکتور جدید"
                >
                    +
                </a>
            </div>

            {/* --- FILTER ROW 1: SEARCH, CATEGORY, TYPE, REFRESH --- */}
            <div style={styles.filterRow}>
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="جستجو بر اساس تاریخ، عنوان یا نام فروشگاه..."
                    style={styles.filterInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Category Select */}
                <select 
                    style={styles.filterSelect}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {uniqueCategories.map(cat => (
                        <option key={cat} value={cat === 'همه دسته ها' ? 'all' : cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                {/* Type Select */}
                <select 
                    style={styles.filterSelect}
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    {uniqueTypes.map(type => (
                        <option key={type} value={type === 'همه انواع' ? 'all' : type}>
                            {type}
                        </option>
                    ))}
                </select>
                
                {/* Manual Refresh Button */}
                 <button 
                    onClick={refreshDataAndState} 
                    disabled={isRefreshing}
                    style={{
                        ...styles.statusButtonBase,
                        backgroundColor: isRefreshing ? '#ccc' : '#f0f0f0',
                        color: isRefreshing ? '#999' : '#333',
                        minWidth: '140px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }}
                >
                    {isRefreshing ? 'درحال به‌روزرسانی...' : `تعداد فاکتورها: ${invoicesList.length}`}
                </button>
            </div>

            {/* --- FILTER ROW 2: STATUS BUTTONS --- */}
            <div style={styles.statusRow}>

                        {/* --- NEW: EXPORT BUTTON --- */}
            <button
                onClick={exportToExcel}
                style={{
                    ...styles.statusButtonBase,
                    backgroundColor: '#107c10', // A strong green color for export
                    color: 'white',
                    minWidth: '140px',
                    border: '1px solid #0a580a',
                    borderRadius: '5px',
                    flexShrink: 0,
                    fontSize: '1em' // Adjusted size for readability
                }}
                title="خروجی گرفتن از لیست فاکتورهای فیلتر شده به اکسل"
            >
                📥 خروجی اکسل ({filteredInvoices.length})
            </button>
    
    {/* Receipt Status Buttons */}
    <div style={styles.buttonGroup}>
        {/* ... (Existing Receipt Status Buttons) ... */}
    </div>

    {/* Invoice Status Buttons */}
    <div style={styles.buttonGroup}>
        {/* ... (Existing Invoice Status Buttons) ... */}
    </div>

                {/* Receipt Status Buttons */}
                <div style={styles.buttonGroup}>
                    <button 
                        style={{ ...styles.statusButtonBase, ...(receiptStatus === 'all' ? styles.statusButtonActive : {}) }}
                        onClick={() => setReceiptStatus('all')}>همه</button>
                    <button 
                        style={{ ...styles.statusButtonBase, ...(receiptStatus === 'has' ? styles.statusButtonActive : {}) }}
                        onClick={() => setReceiptStatus('has')}><span style={{ fontSize: '1.2em' }}>{ICON_CHECK}</span> دارای رسید</button>
                    <button 
                        style={{ ...styles.statusButtonBase, ...(receiptStatus === 'missing' ? styles.statusButtonActive : {}) }}
                        onClick={() => setReceiptStatus('missing')}><span style={{ fontSize: '1.2em' }}>{ICON_X}</span> فاقد رسید</button>
                </div>

                {/* Invoice Status Buttons */}
                <div style={styles.buttonGroup}>
                    <button 
                        style={{ ...styles.statusButtonBase, ...(invoiceStatus === 'all' ? styles.statusButtonActive : {}) }}
                        onClick={() => setInvoiceStatus('all')}>همه</button>
                    <button 
                        style={{ ...styles.statusButtonBase, ...(invoiceStatus === 'has' ? styles.statusButtonActive : {}) }}
                        onClick={() => setInvoiceStatus('has')}><span style={{ fontSize: '1.2em' }}>{ICON_CHECK}</span> دارای فاکتور</button>
                    <button 
                        style={{ ...styles.statusButtonBase, ...(invoiceStatus === 'missing' ? styles.statusButtonActive : {}) }}
                        onClick={() => setInvoiceStatus('missing')}><span style={{ fontSize: '1.2em' }}>{ICON_X}</span> فاقد فاکتور</button>
                </div>
            </div>

            {/* --- INVOICE LIST TABLE --- */}
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead style={styles.tableHead}>
                        <tr>
                            <th style={styles.tableHeaderCell}>تاریخ</th>
                            
                            <th style={styles.tableHeaderCell}>عنوان</th>
                            <th style={styles.tableHeaderCell}>مبلغ (ریال)</th>
                            <th style={styles.tableHeaderCell}>نام فروشگاه</th>
                            <th style={styles.tableHeaderCell}>نوع</th>
                            <th style={styles.tableHeaderCell}>دسته</th>
                            <th style={styles.tableHeaderCell}>توضیحات</th>
                            <th style={styles.tableHeaderCell}>رسید</th>
                            <th style={styles.tableHeaderCell}>فاکتور</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInvoices.length > 0 ? (
                            filteredInvoices.map(invoice => (
                                <tr key={invoice.id} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ ...styles.tableCell, ...styles.actionCell }}>
                                        {/* ⚠️ Edit Button will go here later 
                                        <button style={styles.editButton}>✏️ ویرایش</button> 
                                        */}

                                        {/* --- NEW: DELETE BUTTON --- */}
                                        <DeleteInvoiceButton invoiceId={invoice.id} onDeleteSuccess={refreshDataAndState}/> 
                                        
                                    </td>
                                    <td style={styles.tableDataCell}>{invoice.date}</td>
                                    
                                    <td style={styles.tableDataCell}>{invoice.title}</td>
                                    <td style={styles.tableDataCell}>{formatAmount(invoice.amount)}</td>
                                    <td style={styles.tableDataCell}>{invoice.store_name}</td>
                                    <td style={styles.tableDataCell}>{invoice.type}</td>
                                    <td style={styles.tableDataCell}>{invoice.category}</td>
                                    <td 
                                        style={{ ...styles.tableDataCell, ...styles.descriptionCell }}
                                        onClick={() => toggleDescription(invoice.id)}
                                        title={invoice.description}
                                    >
                                        <div 
                                            style={{
                                                ...styles.descriptionText,
                                                whiteSpace: expandedDescriptionId === invoice.id ? 'normal' : 'nowrap',
                                                overflow: expandedDescriptionId === invoice.id ? 'visible' : 'hidden',
                                                textOverflow: expandedDescriptionId === invoice.id ? 'clip' : 'ellipsis',
                                                minWidth: expandedDescriptionId === invoice.id ? '250px' : 'auto',
                                                backgroundColor: expandedDescriptionId === invoice.id ? '#f9f9f9' : 'transparent',
                                                padding: expandedDescriptionId === invoice.id ? '5px' : '0',
                                                border: expandedDescriptionId === invoice.id ? '1px solid #ddd' : 'none',
                                                position: expandedDescriptionId === invoice.id ? 'absolute' : 'relative',
                                                zIndex: expandedDescriptionId === invoice.id ? 10 : 1,
                                                // 🟢 FIX: Corrected the unterminated string here
                                                left: expandedDescriptionId === invoice.id ? '0' : 'auto', 
                                                boxShadow: expandedDescriptionId === invoice.id ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
                                            }}
                                        >
                                            {invoice.description || '...'}
                                        </div>
                                    </td>
                                    <td style={styles.tableDataCell}>{getStatusIcon(invoice.has_receipt)}</td>
                                    <td style={styles.tableDataCell}>{getStatusIcon(invoice.has_invoice)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" style={{...styles.tableDataCell, textAlign: 'center', padding: '20px'}}>
                                    فاکتوری یافت نشد.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}