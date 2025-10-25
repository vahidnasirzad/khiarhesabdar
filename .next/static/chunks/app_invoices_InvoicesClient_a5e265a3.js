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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)"); // 👈 NEW: Correct App Router import
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$multi$2d$date$2d$picker$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-multi-date-picker/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$date$2d$object$2f$calendars$2f$persian$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-date-object/calendars/persian.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2d$jalaali$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment-jalaali/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client'; // 👈 CRITICAL: Enables useState, useRouter, etc.
;
;
;
;
;
;
// Removed: import pool from '../lib/db'; // DB logic is no longer here
function toPersianNumber(number) {
    if (!number && number !== 0) return '';
    return number.toString().replace(/\d/g, (d)=>'۰۱۲۳۴۵۶۷۸۹'[d]);
}
function fixDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    d.setHours(d.getHours() + 24);
    return d;
}
function toPersianDate(dateStr) {
    const d = fixDate(dateStr);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2d$jalaali$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(d).format('jYYYY/jMM/jDD');
}
function InvoicesClient(param) {
    let { initialInvoices } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const filteredInvoices = initialInvoices.filter((inv)=>{
        var _inv_title, _inv_store_name;
        let match = true;
        if (filters.minPrice) match = match && inv.amount >= Number(filters.minPrice);
        if (filters.maxPrice) match = match && inv.amount <= Number(filters.maxPrice);
        if (filters.date) {
            const selectedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2d$jalaali$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(filters.date.toDate());
            const invoiceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2d$jalaali$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fixDate(inv.date));
            match = match && selectedDate.isSame(invoiceDate, 'day');
        }
        if (filters.type) match = match && inv.type === filters.type;
        if (filters.category) match = match && inv.category === filters.category;
        if (filters.title) match = match && ((_inv_title = inv.title) === null || _inv_title === void 0 ? void 0 : _inv_title.toLowerCase().includes(filters.title.toLowerCase()));
        if (filters.store_name) match = match && ((_inv_store_name = inv.store_name) === null || _inv_store_name === void 0 ? void 0 : _inv_store_name.toLowerCase().includes(filters.store_name.toLowerCase()));
        if (filters.has_receipt) match = match && Boolean(inv.has_receipt) === (filters.has_receipt === 'true');
        if (filters.has_invoice) match = match && Boolean(inv.has_invoice) === (filters.has_invoice === 'true');
        return match;
    });
    const handleFilterChange = (e)=>{
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };
    const handleDateChange = (date)=>{
        setFilters({
            ...filters,
            date
        });
    };
    const resetFilters = ()=>{
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
    const exportToExcel = ()=>{
        const data = filteredInvoices.map((inv)=>({
                ID: inv.id,
                تاریخ: toPersianDate(inv.date),
                عنوان: inv.title,
                مبلغ: inv.amount,
                'نام فروشگاه': inv.store_name,
                نوع: inv.type,
                توضیحات: inv.description,
                دسته: inv.category,
                رسید: inv.has_receipt ? 'دارد' : 'ندارد',
                فاکتور: inv.has_invoice ? 'دارد' : 'ندارد'
            }));
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, 'Invoices');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, 'invoices.xlsx');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: styles.heading,
                children: "لیست فاکتورها"
            }, void 0, false, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.filters,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "تاریخ:"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$multi$2d$date$2d$picker$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                calendar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$date$2d$object$2f$calendars$2f$persian$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                value: filters.date,
                                onChange: handleDateChange,
                                placeholder: "انتخاب تاریخ",
                                style: styles.datePicker
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "حداقل مبلغ:"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                name: "minPrice",
                                value: filters.minPrice,
                                onChange: handleFilterChange,
                                style: styles.input
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "حداکثر مبلغ:"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                name: "maxPrice",
                                value: filters.maxPrice,
                                onChange: handleFilterChange,
                                style: styles.input
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "نوع:"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "type",
                                value: filters.type,
                                onChange: handleFilterChange,
                                style: styles.input,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "همه"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "مصرفی",
                                        children: "مصرفی"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "اموال",
                                        children: "اموال"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "مصرفی-اموال",
                                        children: "مصرفی-اموال"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "دسته:"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "category",
                                value: filters.category,
                                onChange: handleFilterChange,
                                style: styles.input,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "همه"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "IMP",
                                        children: "IMP"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Milling CNC",
                                        children: "Milling CNC"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "PPS",
                                        children: "PPS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "General",
                                        children: "مشترک"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "عنوان:"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "title",
                                value: filters.title,
                                onChange: handleFilterChange,
                                style: styles.input
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "نام فروشگاه:"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "store_name",
                                value: filters.store_name,
                                onChange: handleFilterChange,
                                style: styles.input
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "رسید:"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "has_receipt",
                                value: filters.has_receipt,
                                onChange: handleFilterChange,
                                style: styles.input,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "همه"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "true",
                                        children: "دارد"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "false",
                                        children: "ندارد"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "فاکتور:"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "has_invoice",
                                value: filters.has_invoice,
                                onChange: handleFilterChange,
                                style: styles.input,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "همه"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "true",
                                        children: "دارد"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "false",
                                        children: "ندارد"
                                    }, void 0, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'flex-end'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/add-invoice'),
                                style: styles.addButton,
                                children: "افزودن فاکتور"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: exportToExcel,
                                style: styles.exportButton,
                                children: "خروجی اکسل"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetFilters,
                                style: styles.resetButton,
                                children: "ریست فیلتر"
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/invoices/InvoicesClient.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.tableWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: styles.table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            style: styles.thead,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    'ID',
                                    'تاریخ',
                                    'عنوان',
                                    'مبلغ',
                                    'نام فروشگاه',
                                    'نوع',
                                    'توضیحات',
                                    'دسته',
                                    'رسید',
                                    'فاکتور'
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/app/invoices/InvoicesClient.js",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/invoices/InvoicesClient.js",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/invoices/InvoicesClient.js",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filteredInvoices.map((inv, index)=>{
                                const rowGreen = inv.has_receipt && inv.has_invoice;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        ...styles.tr,
                                        backgroundColor: rowGreen ? '#d4edda' : index % 2 === 0 ? '#f9f9f9' : '#f0f4f8'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: toPersianNumber(inv.id)
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: toPersianDate(inv.date)
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: inv.title || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: [
                                                toPersianNumber(inv.amount),
                                                " ریال"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: inv.store_name || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: inv.type || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: inv.description || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: inv.category || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...styles.td,
                                                color: inv.has_receipt ? 'green' : 'red'
                                            },
                                            children: inv.has_receipt ? 'دارد' : 'ندارد'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...styles.td,
                                                color: inv.has_invoice ? 'green' : 'red'
                                            },
                                            children: inv.has_invoice ? 'دارد' : 'ندارد'
                                        }, void 0, false, {
                                            fileName: "[project]/app/invoices/InvoicesClient.js",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, inv.id, true, {
                                    fileName: "[project]/app/invoices/InvoicesClient.js",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/invoices/InvoicesClient.js",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/invoices/InvoicesClient.js",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/invoices/InvoicesClient.js",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/invoices/InvoicesClient.js",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(InvoicesClient, "nfhWTkW0aHmmhVaTJlbGr+UhPV4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = InvoicesClient;
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
        borderRadius: '10px'
    },
    filterGroup: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '150px',
        textAlign: 'right'
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
    addButton: {
        padding: '10px 15px',
        fontFamily: 'Lalezar, Tahoma, sans-serif',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    exportButton: {
        padding: '10px 15px',
        fontFamily: 'Lalezar, Tahoma, sans-serif',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    resetButton: {
        padding: '10px 15px',
        fontFamily: 'Lalezar, Tahoma, sans-serif',
        backgroundColor: '#ffc107',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    // Table styles
    tableWrapper: {
        overflowX: 'auto',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        backgroundColor: 'white'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'right',
        minWidth: '900px'
    },
    thead: {
        backgroundColor: '#4a90e2',
        color: '#fff'
    },
    th: {
        padding: '12px',
        border: '1px solid #e2e8f0'
    },
    tr: {
        transition: 'background-color 0.2s'
    },
    td: {
        padding: '10px',
        border: '1px solid #e2e8f0',
        color: '#34495e',
        textAlign: 'right'
    }
};
var _c;
__turbopack_context__.k.register(_c, "InvoicesClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_invoices_InvoicesClient_a5e265a3.js.map