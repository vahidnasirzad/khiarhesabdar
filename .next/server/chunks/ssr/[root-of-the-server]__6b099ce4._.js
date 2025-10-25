module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/invoices/InvoicesClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/invoices/InvoicesClient.js
__turbopack_context__.s([
    "default",
    ()=>InvoicesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
function InvoicesClient({ invoices }) {
    // 1. Filter States
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [receiptStatus, setReceiptStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [invoiceStatus, setInvoiceStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    // Tracks the ID of the invoice whose description is currently expanded.
    const [expandedDescriptionId, setExpandedDescriptionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // 2. Extract Unique Categories and Types
    const { uniqueCategories, uniqueTypes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const categories = new Set([
            'همه دسته ها'
        ]);
        const types = new Set([
            'همه انواع'
        ]);
        invoices.forEach((invoice)=>{
            categories.add(invoice.category);
            types.add(invoice.type);
        });
        return {
            uniqueCategories: Array.from(categories),
            uniqueTypes: Array.from(types)
        };
    }, [
        invoices
    ]);
    // 3. Combined Filter Logic and Sorting 
    const filteredInvoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = invoices;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        // Apply search filter
        if (searchTerm) {
            result = result.filter((invoice)=>invoice.date && invoice.date.includes(lowerCaseSearchTerm) || invoice.title.toLowerCase().includes(lowerCaseSearchTerm) || invoice.store_name?.toLowerCase().includes(lowerCaseSearchTerm));
        }
        // Apply category filter
        if (selectedCategory !== 'all' && selectedCategory !== 'همه دسته ها') {
            result = result.filter((invoice)=>invoice.category === selectedCategory);
        }
        // Apply type filter
        if (selectedType !== 'all' && selectedType !== 'همه انواع') {
            result = result.filter((invoice)=>invoice.type === selectedType);
        }
        // Apply receipt status filter
        if (receiptStatus === 'yes') {
            result = result.filter((invoice)=>invoice.has_receipt === true);
        } else if (receiptStatus === 'no') {
            result = result.filter((invoice)=>invoice.has_receipt === false);
        }
        // Apply invoice status filter
        if (invoiceStatus === 'yes') {
            result = result.filter((invoice)=>invoice.has_invoice === true);
        } else if (invoiceStatus === 'no') {
            result = result.filter((invoice)=>invoice.has_invoice === false);
        }
        // Client-Side Sorting
        result.sort((a, b)=>{
            const dateA = a.date || '0000/01/01';
            const dateB = b.date || '0000/01/01';
            if (dateA < dateB) return -1;
            if (dateA > dateB) return 1;
            return 0;
        });
        return result;
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headerContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: styles.heading,
                        children: "لیست فاکتورها"
                    }, void 0, false, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 301,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.filterRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: styles.selectInput,
                        value: selectedCategory,
                        onChange: (e)=>setSelectedCategory(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "همه دسته ها"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 322,
                                columnNumber: 21
                            }, this),
                            uniqueCategories.filter((c)=>c !== 'همه دسته ها').map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: styles.selectInput,
                        value: selectedType,
                        onChange: (e)=>setSelectedType(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "همه انواع"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 333,
                                columnNumber: 21
                            }, this),
                            uniqueTypes.filter((t)=>t !== 'همه انواع').map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...styles.filterRow,
                    justifyContent: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterButtonContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(receiptStatus === 'all'),
                                onClick: ()=>setReceiptStatus('all'),
                                children: "همه"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 345,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(receiptStatus === 'yes'),
                                onClick: ()=>setReceiptStatus('yes'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(receiptStatus === 'no'),
                                onClick: ()=>setReceiptStatus('no'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterButtonContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(invoiceStatus === 'all'),
                                onClick: ()=>setInvoiceStatus('all'),
                                children: "همه"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 367,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(invoiceStatus === 'yes'),
                                onClick: ()=>setInvoiceStatus('yes'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.filterIconButton(invoiceStatus === 'no'),
                                onClick: ()=>setInvoiceStatus('no'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            filteredInvoices.length === 0 && invoices.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: styles.noData,
                children: "هیچ فاکتوری با شرایط فیلتر شده یافت نشد."
            }, void 0, false, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 390,
                columnNumber: 17
            }, this) : invoices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: styles.noData,
                children: "هیچ فاکتوری یافت نشد."
            }, void 0, false, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 392,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.tableWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: styles.table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            style: styles.thead,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "تاریخ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 398,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "نام فروشگاه"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 399,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "عنوان"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 400,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "مبلغ (ریال)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 401,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "نوع"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 402,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "دسته"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 403,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "توضیحات"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 404,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "رسید"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 405,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filteredInvoices.map((invoice)=>{
                                const isExpanded = expandedDescriptionId === invoice.id;
                                const description = invoice.description || '---';
                                const needsTruncation = description.length > 30;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: styles.tr,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 417,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.store_name || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 418,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 419,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.amount
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 420,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.type
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 421,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 422,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.descriptionCell,
                                            onClick: ()=>toggleDescription(invoice.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.descriptionText(isExpanded),
                                                    children: description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/invoices/InvoicesClient.js",
                                                    lineNumber: 428,
                                                    columnNumber: 45
                                                }, this),
                                                !isExpanded && needsTruncation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: invoice.has_receipt ? '✅' : '❌'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 439,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b099ce4._.js.map