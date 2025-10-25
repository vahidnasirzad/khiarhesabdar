(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/invoices/InvoicesClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/invoices/InvoicesClient.js
__turbopack_context__.s([
    "default",
    ()=>InvoicesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// --- JSDoc Type Definition ---
/**
 * @typedef {object} Invoice
 * @property {number} id
 * @property {string | null} date
 * @property {string} title
 * @property {string} amount
 *
// ... (omitted JSDoc properties for brevity)
 */ // --- Styles ---
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
        textAlign: 'right'
    },
    // Header container for title and plus button
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
    // Plus button design
    addButtonIcon: {
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
        lineHeight: '1',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'background-color 0.2s',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        fontFamily: 'Tahoma, sans-serif',
        fontWeight: 'bold',
        flexShrink: 0
    },
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
    selectInput: {
        padding: '10px 15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minWidth: '150px',
        fontFamily: 'Tahoma, sans-serif',
        textAlignLast: 'right',
        direction: 'rtl'
    },
    // 🎨 NEW FILTER GROUP CONTAINER 🎨
    filterButtonContainer: {
        display: 'flex',
        gap: '2px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #ccc',
        backgroundColor: '#f5f5f5'
    },
    // 🎨 NEW INDIVIDUAL ICON BUTTON STYLE 🎨
    filterIconButton: (isActive)=>({
            padding: '8px 12px',
            border: 'none',
            backgroundColor: isActive ? '#007bff' : 'transparent',
            color: isActive ? 'white' : '#555',
            cursor: 'pointer',
            fontFamily: 'Tahoma, sans-serif',
            transition: 'background-color 0.2s, color 0.2s',
            fontSize: '0.9em',
            minWidth: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            // Ensure no inherited border for the new structure
            borderLeft: 'none'
        }),
    noData: {
        textAlign: 'center',
        fontSize: '1.2em',
        color: '#777',
        padding: '30px'
    },
    tableWrapper: {
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
    thead: {
        backgroundColor: '#4CAF50',
        color: 'white'
    },
    th: {
        padding: '12px 10px',
        textAlign: 'center',
        borderBottom: '2px solid #ddd',
        whiteSpace: 'nowrap'
    },
    tr: {
        borderBottom: '1px solid #eee'
    },
    td: {
        padding: '10px 10px',
        textAlign: 'center',
        verticalAlign: 'top',
        whiteSpace: 'nowrap'
    },
    descriptionCell: {
        padding: '10px 10px',
        textAlign: 'center',
        verticalAlign: 'top',
        cursor: 'pointer',
        maxWidth: '150px',
        position: 'relative',
        whiteSpace: 'normal'
    },
    descriptionText: (isExpanded)=>({
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
            textAlign: 'right'
        }),
    moreIndicator: {
        color: '#999',
        fontSize: '0.9em',
        marginRight: '5px',
        whiteSpace: 'nowrap'
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
        display: 'block'
    }
};
function InvoicesClient(param) {
    let { invoices } = param;
    _s();
    // 1. Filter States
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [receiptStatus, setReceiptStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [invoiceStatus, setInvoiceStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    // Tracks the ID of the invoice whose description is currently expanded.
    const [expandedDescriptionId, setExpandedDescriptionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 2. Extract Unique Categories and Types
    const { uniqueCategories, uniqueTypes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InvoicesClient.useMemo": ()=>{
            const categories = new Set([
                'همه دسته ها'
            ]);
            const types = new Set([
                'همه انواع'
            ]);
            invoices.forEach({
                "InvoicesClient.useMemo": (invoice)=>{
                    categories.add(invoice.category);
                    types.add(invoice.type);
                }
            }["InvoicesClient.useMemo"]);
            return {
                uniqueCategories: Array.from(categories),
                uniqueTypes: Array.from(types)
            };
        }
    }["InvoicesClient.useMemo"], [
        invoices
    ]);
    // 3. Combined Filter Logic and Sorting 
    const filteredInvoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InvoicesClient.useMemo[filteredInvoices]": ()=>{
            let result = invoices;
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            // Apply search filter
            if (searchTerm) {
                result = result.filter({
                    "InvoicesClient.useMemo[filteredInvoices]": (invoice)=>{
                        var _invoice_store_name;
                        return invoice.date && invoice.date.includes(lowerCaseSearchTerm) || invoice.title.toLowerCase().includes(lowerCaseSearchTerm) || ((_invoice_store_name = invoice.store_name) === null || _invoice_store_name === void 0 ? void 0 : _invoice_store_name.toLowerCase().includes(lowerCaseSearchTerm));
                    }
                }["InvoicesClient.useMemo[filteredInvoices]"]);
            }
            // Apply category filter
            if (selectedCategory !== 'all' && selectedCategory !== 'همه دسته ها') {
                result = result.filter({
                    "InvoicesClient.useMemo[filteredInvoices]": (invoice)=>invoice.category === selectedCategory
                }["InvoicesClient.useMemo[filteredInvoices]"]);
            }
            // Apply type filter
            if (selectedType !== 'all' && selectedType !== 'همه انواع') {
                result = result.filter({
                    "InvoicesClient.useMemo[filteredInvoices]": (invoice)=>invoice.type === selectedType
                }["InvoicesClient.useMemo[filteredInvoices]"]);
            }
            // Apply receipt status filter
            if (receiptStatus === 'yes') {
                result = result.filter({
                    "InvoicesClient.useMemo[filteredInvoices]": (invoice)=>invoice.has_receipt === true
                }["InvoicesClient.useMemo[filteredInvoices]"]);
            } else if (receiptStatus === 'no') {
                result = result.filter({
                    "InvoicesClient.useMemo[filteredInvoices]": (invoice)=>invoice.has_receipt === false
                }["InvoicesClient.useMemo[filteredInvoices]"]);
            }
            // Apply invoice status filter
            if (invoiceStatus === 'yes') {
                result = result.filter({
                    "InvoicesClient.useMemo[filteredInvoices]": (invoice)=>invoice.has_invoice === true
                }["InvoicesClient.useMemo[filteredInvoices]"]);
            } else if (invoiceStatus === 'no') {
                result = result.filter({
                    "InvoicesClient.useMemo[filteredInvoices]": (invoice)=>invoice.has_invoice === false
                }["InvoicesClient.useMemo[filteredInvoices]"]);
            }
            // Client-Side Sorting
            result.sort({
                "InvoicesClient.useMemo[filteredInvoices]": (a, b)=>{
                    const dateA = a.date || '0000/01/01';
                    const dateB = b.date || '0000/01/01';
                    if (dateA < dateB) return -1;
                    if (dateA > dateB) return 1;
                    return 0;
                }
            }["InvoicesClient.useMemo[filteredInvoices]"]);
            return result;
        }
    }["InvoicesClient.useMemo[filteredInvoices]"], [
        invoices,
        searchTerm,
        selectedCategory,
        selectedType,
        receiptStatus,
        invoiceStatus
    ]);
    // 4. Toggle Description Handler
    const toggleDescription = (id)=>{
        setExpandedDescriptionId(expandedDescriptionId === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headerContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: styles.heading,
                        children: "لیست فاکتورها"
                    }, void 0, false, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 301,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/add-invoice",
                        style: styles.addButtonIcon,
                        title: "افزودن فاکتور جدید",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 302,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 300,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.filterRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "جستجو بر اساس تاریخ، عنوان یا نام فروشگاه...",
                        style: styles.filterInput,
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 309,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: styles.selectInput,
                        value: selectedCategory,
                        onChange: (e)=>setSelectedCategory(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "همه دسته ها"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 322,
                                columnNumber: 21
                            }, this),
                            uniqueCategories.filter((c)=>c !== 'همه دسته ها').map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: category,
                                    children: category
                                }, category, false, {
                                    fileName: "[project]/app/invoices/InvoicesClient.js",
                                    lineNumber: 324,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 317,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: styles.selectInput,
                        value: selectedType,
                        onChange: (e)=>setSelectedType(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "همه انواع"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 333,
                                columnNumber: 21
                            }, this),
                            uniqueTypes.filter((t)=>t !== 'همه انواع').map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: type,
                                    children: type
                                }, type, false, {
                                    fileName: "[project]/app/invoices/InvoicesClient.js",
                                    lineNumber: 335,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 328,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 308,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...styles.filterRow,
                    justifyContent: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterButtonContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(receiptStatus === 'all'),
                                onClick: ()=>setReceiptStatus('all'),
                                children: "همه"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 345,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(receiptStatus === 'yes'),
                                onClick: ()=>setReceiptStatus('yes'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.2em'
                                        },
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 355,
                                        columnNumber: 25
                                    }, this),
                                    " دارای رسید"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 351,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(receiptStatus === 'no'),
                                onClick: ()=>setReceiptStatus('no'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.2em'
                                        },
                                        children: "❌"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 361,
                                        columnNumber: 25
                                    }, this),
                                    " فاقد رسید"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 357,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 344,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterButtonContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(invoiceStatus === 'all'),
                                onClick: ()=>setInvoiceStatus('all'),
                                children: "همه"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 367,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(invoiceStatus === 'yes'),
                                onClick: ()=>setInvoiceStatus('yes'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.2em'
                                        },
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 377,
                                        columnNumber: 25
                                    }, this),
                                    " دارای فاکتور"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 373,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(invoiceStatus === 'no'),
                                onClick: ()=>setInvoiceStatus('no'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.2em'
                                        },
                                        children: "❌"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 383,
                                        columnNumber: 25
                                    }, this),
                                    " فاقد فاکتور"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 379,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 366,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 341,
                columnNumber: 13
            }, this),
            filteredInvoices.length === 0 && invoices.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: styles.noData,
                children: "هیچ فاکتوری با شرایط فیلتر شده یافت نشد."
            }, void 0, false, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 390,
                columnNumber: 17
            }, this) : invoices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: styles.noData,
                children: "هیچ فاکتوری یافت نشد."
            }, void 0, false, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 392,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.tableWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: styles.table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            style: styles.thead,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "تاریخ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 398,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "نام فروشگاه"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 399,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "عنوان"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 400,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "مبلغ (ریال)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 401,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "نوع"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 402,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "دسته"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 403,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "توضیحات"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 404,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "رسید"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 405,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "فاکتور"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 406,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 397,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/invoices/InvoicesClient.js",
                            lineNumber: 396,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filteredInvoices.map((invoice)=>{
                                const isExpanded = expandedDescriptionId === invoice.id;
                                const description = invoice.description || '---';
                                const needsTruncation = description.length > 30;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: styles.tr,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 417,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.store_name || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 418,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 419,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.amount
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 420,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.type
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 421,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 422,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.descriptionCell,
                                            onClick: ()=>toggleDescription(invoice.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.descriptionText(isExpanded),
                                                    children: description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/invoices/InvoicesClient.js",
                                                    lineNumber: 428,
                                                    columnNumber: 45
                                                }, this),
                                                !isExpanded && needsTruncation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: styles.moreIndicator,
                                                    children: "... (بیشتر)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/invoices/InvoicesClient.js",
                                                    lineNumber: 432,
                                                    columnNumber: 49
                                                }, this),
                                                !description && '---'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 424,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.has_receipt ? '✅' : '❌'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 439,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.has_invoice ? '✅' : '❌'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 440,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, invoice.id, true, {
                                    fileName: "[project]/app/invoices/InvoicesClient.js",
                                    lineNumber: 416,
                                    columnNumber: 37
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/invoices/InvoicesClient.js",
                            lineNumber: 409,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/invoices/InvoicesClient.js",
                    lineNumber: 395,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 394,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/invoices/InvoicesClient.js",
        lineNumber: 298,
        columnNumber: 9
    }, this);
}
_s(InvoicesClient, "LIBfkOHmjXITTinYDlYf3UfP+2c=");
_c = InvoicesClient;
var _c;
__turbopack_context__.k.register(_c, "InvoicesClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_3da62d6c._.js.map