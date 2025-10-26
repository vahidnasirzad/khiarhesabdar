(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/data:b942f1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0025615dfe68c561327a3a27ecf04117bebb03270b":"revalidateInvoices"},"lib/actions.js",""] */ __turbopack_context__.s([
    "revalidateInvoices",
    ()=>revalidateInvoices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var revalidateInvoices = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0025615dfe68c561327a3a27ecf04117bebb03270b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "revalidateInvoices"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvYWN0aW9ucy5qc1xuJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG4vKipcbiAqIEZvcmNlcyBOZXh0LmpzIHRvIHJlLWZldGNoIGRhdGEgZm9yIHRoZSBpbnZvaWNlcyBsaXN0aW5nIHBhZ2UgXG4gKiBieSBjbGVhcmluZyB0aGUgc3RhdGljIGNhY2hlIGZvciB0aGF0IHBhdGguXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXZhbGlkYXRlSW52b2ljZXMoKSB7XG4gIC8vIFRoaXMgaXMgdGhlIHBhdGggb2YgdGhlIFNlcnZlciBDb21wb25lbnQgd2Ugd2FudCB0byByZS1ydW5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZvaWNlcycpOyBcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBSQVNzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/invoices/InvoicesClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/invoices/InvoicesClient.js
__turbopack_context__.s([
    "default",
    ()=>InvoicesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$b942f1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:b942f1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
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
        color: 'white'
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
        whiteSpace: 'normal'
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
    }
};
// --- END Styles Definition ---
// Utility function to format amount with Iranian locale
const formatAmount = (amount)=>{
    // Note: Assuming amount is passed as a string from the server component
    return amount ? Number(amount).toLocaleString('fa-IR') : '0';
};
// Utility function to get status icon
const getStatusIcon = (status)=>{
    return status ? ICON_CHECK : ICON_X;
};
function InvoicesClient(param) {
    let { initialInvoices } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // --- State Management ---
    const [invoicesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialInvoices || []);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [receiptStatus, setReceiptStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [invoiceStatus, setInvoiceStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [expandedDescriptionId, setExpandedDescriptionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Actions ---
    const toggleDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvoicesClient.useCallback[toggleDescription]": (id)=>{
            // Toggle the description expansion
            setExpandedDescriptionId({
                "InvoicesClient.useCallback[toggleDescription]": (prevId)=>prevId === id ? null : id
            }["InvoicesClient.useCallback[toggleDescription]"]);
        }
    }["InvoicesClient.useCallback[toggleDescription]"], []);
    const refreshDataAndState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvoicesClient.useCallback[refreshDataAndState]": async ()=>{
            setIsRefreshing(true);
            try {
                // Call Server Action to clear the cache of the parent Server Component
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$b942f1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateInvoices"])();
                // Manually trigger a full window reload to force the Server Component to re-run
                window.location.reload();
            } catch (e) {
                console.error("Failed to trigger refresh:", e);
                setIsRefreshing(false);
            }
        }
    }["InvoicesClient.useCallback[refreshDataAndState]"], []);
    // --- Filtering and Sorting Logic ---
    const { uniqueCategories, uniqueTypes, filteredInvoices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InvoicesClient.useMemo": ()=>{
            const categories = new Set([
                'همه دسته ها'
            ]);
            const types = new Set([
                'همه انواع'
            ]);
            invoicesList.forEach({
                "InvoicesClient.useMemo": (invoice)=>{
                    categories.add(invoice.category);
                    types.add(invoice.type);
                }
            }["InvoicesClient.useMemo"]);
            let result = invoicesList.filter({
                "InvoicesClient.useMemo.result": (invoice)=>{
                    const lowerCaseSearchTerm = searchTerm.toLowerCase();
                    // 1. Search Filter (Title, Store Name, Date, Description)
                    const matchesSearch = lowerCaseSearchTerm === '' || invoice.title.toLowerCase().includes(lowerCaseSearchTerm) || invoice.store_name.toLowerCase().includes(lowerCaseSearchTerm) || invoice.date.includes(lowerCaseSearchTerm) || (invoice.description || '').toLowerCase().includes(lowerCaseSearchTerm);
                    // 2. Category Filter
                    const matchesCategory = selectedCategory === 'all' || invoice.category === selectedCategory;
                    // 3. Type Filter
                    const matchesType = selectedType === 'all' || invoice.type === selectedType;
                    // 4. Receipt Status Filter
                    const matchesReceipt = receiptStatus === 'all' || receiptStatus === 'has' && invoice.has_receipt || receiptStatus === 'missing' && !invoice.has_receipt;
                    // 5. Invoice Status Filter
                    const matchesInvoice = invoiceStatus === 'all' || invoiceStatus === 'has' && invoice.has_invoice || invoiceStatus === 'missing' && !invoice.has_invoice;
                    return matchesSearch && matchesCategory && matchesType && matchesReceipt && matchesInvoice;
                }
            }["InvoicesClient.useMemo.result"]);
            // Client-Side Sorting (By Jalaali Date Descending)
            result.sort({
                "InvoicesClient.useMemo": (a, b)=>{
                    if (a.date > b.date) return -1;
                    if (a.date < b.date) return 1;
                    return 0;
                }
            }["InvoicesClient.useMemo"]);
            return {
                uniqueCategories: Array.from(categories),
                uniqueTypes: Array.from(types),
                filteredInvoices: result
            };
        }
    }["InvoicesClient.useMemo"], [
        invoicesList,
        searchTerm,
        selectedCategory,
        selectedType,
        receiptStatus,
        invoiceStatus
    ]);
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
                        lineNumber: 289,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/add-invoice",
                        style: styles.addButton,
                        title: "افزودن فاکتور جدید",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 290,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 288,
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
                        lineNumber: 302,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: styles.filterSelect,
                        value: selectedCategory,
                        onChange: (e)=>setSelectedCategory(e.target.value),
                        children: uniqueCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: cat === 'همه دسته ها' ? 'all' : cat,
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 317,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 311,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: styles.filterSelect,
                        value: selectedType,
                        onChange: (e)=>setSelectedType(e.target.value),
                        children: uniqueTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: type === 'همه انواع' ? 'all' : type,
                                children: type
                            }, type, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 330,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 324,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: refreshDataAndState,
                        disabled: isRefreshing,
                        style: {
                            ...styles.statusButtonBase,
                            backgroundColor: isRefreshing ? '#ccc' : '#f0f0f0',
                            color: isRefreshing ? '#999' : '#333',
                            minWidth: '140px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        },
                        children: isRefreshing ? 'درحال به‌روزرسانی...' : "تعداد فاکتورها: ".concat(invoicesList.length)
                    }, void 0, false, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 337,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 300,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.statusRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.buttonGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...styles.statusButtonBase,
                                    ...receiptStatus === 'all' ? styles.statusButtonActive : {}
                                },
                                onClick: ()=>setReceiptStatus('all'),
                                children: "همه"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 357,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...styles.statusButtonBase,
                                    ...receiptStatus === 'has' ? styles.statusButtonActive : {}
                                },
                                onClick: ()=>setReceiptStatus('has'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.2em'
                                        },
                                        children: ICON_CHECK
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 362,
                                        columnNumber: 65
                                    }, this),
                                    " دارای رسید"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 360,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...styles.statusButtonBase,
                                    ...receiptStatus === 'missing' ? styles.statusButtonActive : {}
                                },
                                onClick: ()=>setReceiptStatus('missing'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.2em'
                                        },
                                        children: ICON_X
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 365,
                                        columnNumber: 69
                                    }, this),
                                    " فاقد رسید"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 363,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 356,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.buttonGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...styles.statusButtonBase,
                                    ...invoiceStatus === 'all' ? styles.statusButtonActive : {}
                                },
                                onClick: ()=>setInvoiceStatus('all'),
                                children: "همه"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 370,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...styles.statusButtonBase,
                                    ...invoiceStatus === 'has' ? styles.statusButtonActive : {}
                                },
                                onClick: ()=>setInvoiceStatus('has'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.2em'
                                        },
                                        children: ICON_CHECK
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 375,
                                        columnNumber: 65
                                    }, this),
                                    " دارای فاکتور"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 373,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...styles.statusButtonBase,
                                    ...invoiceStatus === 'missing' ? styles.statusButtonActive : {}
                                },
                                onClick: ()=>setInvoiceStatus('missing'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.2em'
                                        },
                                        children: ICON_X
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 378,
                                        columnNumber: 69
                                    }, this),
                                    " فاقد فاکتور"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 376,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 369,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 354,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.tableContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: styles.table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            style: styles.tableHead,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeaderCell,
                                        children: "تاریخ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 387,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeaderCell,
                                        children: "نام فروشگاه"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 388,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeaderCell,
                                        children: "عنوان"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 389,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeaderCell,
                                        children: "مبلغ (ریال)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 390,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeaderCell,
                                        children: "نوع"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 391,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeaderCell,
                                        children: "دسته"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 392,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeaderCell,
                                        children: "توضیحات"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 393,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeaderCell,
                                        children: "رسید"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 394,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeaderCell,
                                        children: "فاکتور"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 395,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 386,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/invoices/InvoicesClient.js",
                            lineNumber: 385,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filteredInvoices.length > 0 ? filteredInvoices.map((invoice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        borderBottom: '1px solid #eee'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.tableDataCell,
                                            children: invoice.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 402,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.tableDataCell,
                                            children: invoice.store_name
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 403,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.tableDataCell,
                                            children: invoice.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 404,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.tableDataCell,
                                            children: formatAmount(invoice.amount)
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 405,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.tableDataCell,
                                            children: invoice.type
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 406,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.tableDataCell,
                                            children: invoice.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 407,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...styles.tableDataCell,
                                                ...styles.descriptionCell
                                            },
                                            onClick: ()=>toggleDescription(invoice.id),
                                            title: invoice.description,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
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
                                                    boxShadow: expandedDescriptionId === invoice.id ? '0 2px 5px rgba(0,0,0,0.1)' : 'none'
                                                },
                                                children: invoice.description || '...'
                                            }, void 0, false, {
                                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                                lineNumber: 413,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 408,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.tableDataCell,
                                            children: getStatusIcon(invoice.has_receipt)
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 433,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.tableDataCell,
                                            children: getStatusIcon(invoice.has_invoice)
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 434,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, invoice.id, true, {
                                    fileName: "[project]/app/invoices/InvoicesClient.js",
                                    lineNumber: 401,
                                    columnNumber: 33
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: "9",
                                    style: {
                                        ...styles.tableDataCell,
                                        textAlign: 'center',
                                        padding: '20px'
                                    },
                                    children: "فاکتوری یافت نشد."
                                }, void 0, false, {
                                    fileName: "[project]/app/invoices/InvoicesClient.js",
                                    lineNumber: 439,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 438,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/invoices/InvoicesClient.js",
                            lineNumber: 398,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/invoices/InvoicesClient.js",
                    lineNumber: 384,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 383,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/invoices/InvoicesClient.js",
        lineNumber: 286,
        columnNumber: 9
    }, this);
}
_s(InvoicesClient, "D1u65ThI7nxVdGLOUuRTHgb+mUw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
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
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_8c74436a._.js.map