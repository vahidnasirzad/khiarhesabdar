// app/invoices/InvoicesClient.js
'use client'; 

import React, { useState, useMemo } from 'react';

// --- JSDoc Type Definition ---
/**
 * @typedef {object} Invoice
 * @property {number} id
 * @property {string | null} date
 * @property {string} title
 * @property {string} amount
 *
// ... (omitted JSDoc properties for brevity)
 */


// --- Styles ---
const styles = {
    container: {
        maxWidth: '1200px', 
        margin: '50px auto',
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        color: '#333',
        fontFamily: 'Tahoma, sans-serif',
        textAlign: 'right', 
    },
    // Header container for title and plus button
    headerContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px',
    },
    heading: {
        margin: 0,
        color: '#1a4f1a',
        marginLeft: 'auto',
        paddingRight: '15px',
    },
    // Plus button design
    addButtonIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%', 
        border: 'none',
        backgroundColor: '#4CAF50', // Green color
        color: 'white',
        fontSize: '24px',
        lineHeight: '1',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'background-color 0.2s',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        fontFamily: 'Tahoma, sans-serif',
        fontWeight: 'bold',
        flexShrink: 0, 
    },
    filterRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '15px',
        gap: '15px', 
    },
    filterInput: {
        padding: '10px 15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        flexGrow: 1, 
        minWidth: '200px',
        boxSizing: 'border-box',
        textAlign: 'right',
        fontFamily: 'Tahoma, sans-serif',
    },
    selectInput: { 
        padding: '10px 15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minWidth: '150px',
        fontFamily: 'Tahoma, sans-serif',
        textAlignLast: 'right', 
        direction: 'rtl',
    },
    // 🎨 NEW FILTER GROUP CONTAINER 🎨
    filterButtonContainer: {
        display: 'flex',
        gap: '2px', // Minimal gap between buttons
        borderRadius: '8px', // Nicer rounded corners for the group
        overflow: 'hidden',
        border: '1px solid #ccc',
        backgroundColor: '#f5f5f5',
    },
    // 🎨 NEW INDIVIDUAL ICON BUTTON STYLE 🎨
    filterIconButton: (isActive) => ({
        padding: '8px 12px',
        border: 'none',
        backgroundColor: isActive ? '#007bff' : 'transparent', // Blue for active
        color: isActive ? 'white' : '#555',
        cursor: 'pointer',
        fontFamily: 'Tahoma, sans-serif',
        transition: 'background-color 0.2s, color 0.2s',
        fontSize: '0.9em',
        minWidth: '70px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px', // Space between icon and text
        // Ensure no inherited border for the new structure
        borderLeft: 'none', 
    }),
    noData: {
        textAlign: 'center',
        fontSize: '1.2em',
        color: '#777',
        padding: '30px',
    },
    tableWrapper: {
        overflowX: 'auto', 
        width: '100%',
        marginTop: '20px',
    },
    table: {
        width: 'auto', 
        minWidth: '100%', 
        borderCollapse: 'collapse',
        fontSize: '0.85em',
        direction: 'rtl', 
    },
    thead: {
        backgroundColor: '#4CAF50', 
        color: 'white',
    },
    th: {
        padding: '12px 10px',
        textAlign: 'center', 
        borderBottom: '2px solid #ddd',
        whiteSpace: 'nowrap',
    },
    tr: {
        borderBottom: '1px solid #eee',
    },
    td: {
        padding: '10px 10px',
        textAlign: 'center', 
        verticalAlign: 'top', 
        whiteSpace: 'nowrap',
    },
    descriptionCell: {
        padding: '10px 10px',
        textAlign: 'center', 
        verticalAlign: 'top',
        cursor: 'pointer',
        maxWidth: '150px', 
        position: 'relative',
        whiteSpace: 'normal',
    },
    descriptionText: (isExpanded) => ({
        display: 'block',
        maxWidth: isExpanded ? '300px' : '100%',
        whiteSpace: isExpanded ? 'normal' : 'nowrap', 
        overflow: 'hidden',
        textOverflow: 'ellipsis', 
        backgroundColor: isExpanded ? '#fffbe6' : 'transparent', 
        border: isExpanded ? '1px solid #ffcc00' : 'none',
        borderRadius: isExpanded ? '4px' : 'none',
        padding: isExpanded ? '5px' : '0',
        lineHeight: '1.4em',
        position: isExpanded ? 'absolute' : 'relative',
        zIndex: isExpanded ? 100 : 1,
        left: isExpanded ? '50%' : 'auto',
        transform: isExpanded ? 'translateX(-50%)' : 'none', 
        minWidth: isExpanded ? '250px' : 'auto',
        textAlign: 'right',
    }),
    moreIndicator: {
        color: '#999', 
        fontSize: '0.9em', 
        marginRight: '5px',
        whiteSpace: 'nowrap',
    },
    // The old styles.addButton is now irrelevant but kept here for safety.
    addButton: {
        padding: '10px 25px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#1a4f1a', 
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        textDecoration: 'none', 
        textAlign: 'center',
        fontFamily: 'Tahoma, sans-serif',
        marginLeft: 'auto', 
        display: 'block',
    },
};


/**
 * @param {{ invoices: Invoice[] }} props 
 */
export default function InvoicesClient({ invoices }) {
    // 1. Filter States
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [receiptStatus, setReceiptStatus] = useState('all');
    const [invoiceStatus, setInvoiceStatus] = useState('all');
    
    // Tracks the ID of the invoice whose description is currently expanded.
    const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

    // 2. Extract Unique Categories and Types
    const { uniqueCategories, uniqueTypes } = useMemo(() => {
        const categories = new Set(['همه دسته ها']);
        const types = new Set(['همه انواع']); 
        
        invoices.forEach(invoice => {
            categories.add(invoice.category);
            types.add(invoice.type);
        });
        
        return {
            uniqueCategories: Array.from(categories),
            uniqueTypes: Array.from(types)
        };
    }, [invoices]);


    // 3. Combined Filter Logic and Sorting 
    const filteredInvoices = useMemo(() => {
        let result = invoices;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        
        // Apply search filter
        if (searchTerm) {
             result = result.filter(invoice => 
                (invoice.date && invoice.date.includes(lowerCaseSearchTerm)) ||
                invoice.title.toLowerCase().includes(lowerCaseSearchTerm) ||
                (invoice.store_name?.toLowerCase().includes(lowerCaseSearchTerm))
            );
        }

        // Apply category filter
        if (selectedCategory !== 'all' && selectedCategory !== 'همه دسته ها') {
            result = result.filter(invoice => invoice.category === selectedCategory);
        }
        
        // Apply type filter
        if (selectedType !== 'all' && selectedType !== 'همه انواع') {
            result = result.filter(invoice => invoice.type === selectedType);
        }

        // Apply receipt status filter
        if (receiptStatus === 'yes') {
            result = result.filter(invoice => invoice.has_receipt === true);
        } else if (receiptStatus === 'no') {
            result = result.filter(invoice => invoice.has_receipt === false);
        }

        // Apply invoice status filter
        if (invoiceStatus === 'yes') {
            result = result.filter(invoice => invoice.has_invoice === true);
        } else if (invoiceStatus === 'no') {
            result = result.filter(invoice => invoice.has_invoice === false);
        }
        
        // Client-Side Sorting
        result.sort((a, b) => {
            const dateA = a.date || '0000/01/01'; 
            const dateB = b.date || '0000/01/01'; 
            
            if (dateA < dateB) return -1;  
            if (dateA > dateB) return 1;   
            return 0; 
        });

        return result;
    }, [invoices, searchTerm, selectedCategory, selectedType, receiptStatus, invoiceStatus]); 


    // 4. Toggle Description Handler
    const toggleDescription = (id) => {
        setExpandedDescriptionId(expandedDescriptionId === id ? null : id);
    };

    return (
        <div style={styles.container}>
            {/* ✅ HEADER CONTAINER and PLUS BUTTON */}
            <div style={styles.headerContainer}>
                <h2 style={styles.heading}>لیست فاکتورها</h2>
                <a href="/add-invoice" style={styles.addButtonIcon} title="افزودن فاکتور جدید">
                    +
                </a>
            </div>
            
            {/* Row 1: Search Input, Category, and Type */}
            <div style={styles.filterRow}>
                <input 
                    type="text" 
                    placeholder="جستجو بر اساس تاریخ، عنوان یا نام فروشگاه..." 
                    style={styles.filterInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <select 
                    style={styles.selectInput}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="all">همه دسته ها</option>
                    {uniqueCategories.filter(c => c !== 'همه دسته ها').map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                
                <select 
                    style={styles.selectInput}
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="all">همه انواع</option>
                    {uniqueTypes.filter(t => t !== 'همه انواع').map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            {/* Row 2: Status Toggle Buttons (NEW BRIEF DESIGN) */}
            <div style={{...styles.filterRow, justifyContent: 'flex-start'}}>
                
                {/* Receipt Filters */}
                <div style={styles.filterButtonContainer}>
                    <button 
                        style={styles.filterIconButton(receiptStatus === 'all')}
                        onClick={() => setReceiptStatus('all')}
                    >
                        همه
                    </button>
                    <button 
                        style={styles.filterIconButton(receiptStatus === 'yes')}
                        onClick={() => setReceiptStatus('yes')}
                    >
                        <span style={{fontSize: '1.2em'}}>✅</span> دارای رسید
                    </button>
                    <button 
                        style={styles.filterIconButton(receiptStatus === 'no')}
                        onClick={() => setReceiptStatus('no')}
                    >
                        <span style={{fontSize: '1.2em'}}>❌</span> فاقد رسید
                    </button>
                </div>

                {/* Invoice Filters */}
                <div style={styles.filterButtonContainer}>
                    <button 
                        style={styles.filterIconButton(invoiceStatus === 'all')}
                        onClick={() => setInvoiceStatus('all')}
                    >
                        همه
                    </button>
                    <button 
                        style={styles.filterIconButton(invoiceStatus === 'yes')}
                        onClick={() => setInvoiceStatus('yes')}
                    >
                        <span style={{fontSize: '1.2em'}}>✅</span> دارای فاکتور
                    </button>
                    <button 
                        style={styles.filterIconButton(invoiceStatus === 'no')}
                        onClick={() => setInvoiceStatus('no')}
                    >
                        <span style={{fontSize: '1.2em'}}>❌</span> فاقد فاکتور
                    </button>
                </div>
            </div>

            {/* Table Display */}
            {filteredInvoices.length === 0 && invoices.length > 0 ? (
                <p style={styles.noData}>هیچ فاکتوری با شرایط فیلتر شده یافت نشد.</p>
            ) : (invoices.length === 0 ? (
                <p style={styles.noData}>هیچ فاکتوری یافت نشد.</p>
            ) : (
                <div style={styles.tableWrapper}>
                    <table style={styles.table}>
                        <thead style={styles.thead}>
                            <tr>
                                <th style={styles.th}>تاریخ</th> 
                                <th style={styles.th}>نام فروشگاه</th>
                                <th style={styles.th}>عنوان</th>
                                <th style={styles.th}>مبلغ (ریال)</th>
                                <th style={styles.th}>نوع</th>
                                <th style={styles.th}>دسته</th>
                                <th style={styles.th}>توضیحات</th> 
                                <th style={styles.th}>رسید</th>
                                <th style={styles.th}>فاکتور</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInvoices.map((invoice) => {
                                const isExpanded = expandedDescriptionId === invoice.id;
                                const description = invoice.description || '---';
                                const needsTruncation = description.length > 30;

                                return (
                                    <tr key={invoice.id} style={styles.tr}>
                                        <td style={styles.td}>{invoice.date}</td> 
                                        <td style={styles.td}>{invoice.store_name || 'N/A'}</td>
                                        <td style={styles.td}>{invoice.title}</td>
                                        <td style={styles.td}>{invoice.amount}</td>
                                        <td style={styles.td}>{invoice.type}</td>
                                        <td style={styles.td}>{invoice.category}</td>
                                        
                                        <td 
                                            style={styles.descriptionCell}
                                            onClick={() => toggleDescription(invoice.id)} 
                                        >
                                            <div style={styles.descriptionText(isExpanded)}>
                                                {description}
                                            </div>
                                            {!isExpanded && needsTruncation && (
                                                <span style={styles.moreIndicator}>
                                                    ... (بیشتر)
                                                </span>
                                            )}
                                            {!description && '---'}
                                        </td>
                                        
                                        <td style={styles.td}>{invoice.has_receipt ? '✅' : '❌'}</td>
                                        <td style={styles.td}>{invoice.has_invoice ? '✅' : '❌'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}
