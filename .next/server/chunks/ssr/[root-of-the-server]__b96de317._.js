module.exports = [
"[project]/.next-internal/server/app/invoices/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/invoices/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/invoices/page.js
// Assuming 'pool' is correctly imported from your database setup file
// import { pool } from '@/lib/db'; 
__turbopack_context__.s([
    "default",
    ()=>InvoicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2d$jalaali$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment-jalaali/index.js [app-rsc] (ecmascript)");
;
;
// --- The corrected data fetching function ---
// Rewritten function using Prisma
async function getInvoices() {
    try {
        // 1. EXECUTE THE QUERY using Prisma
        const rows = await prisma.invoice.findMany({
            orderBy: [
                {
                    date: 'desc'
                },
                {
                    id: 'desc'
                }
            ]
        });
        // 2. PROCESS THE ROWS
        const invoices = rows.map((row)=>({
                ...row,
                // Date conversion (Prisma returns JS Date objects)
                date: row.date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2d$jalaali$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(row.date).format('jYYYY/jMM/jDD') : null,
                // Amount formatting (Prisma Decimal types usually convert cleanly)
                amount: row.amount.toString()
            }));
        return invoices;
    } catch (err) {
        console.error('Prisma Fetch Error:', err);
        throw new Error('Failed to fetch invoices from the database.');
    }
}
async function InvoicesPage() {
    const invoices = await getInvoices();
    // Your component rendering logic goes here, using the 'invoices' array.
    // ...
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
        fileName: "[project]/app/invoices/page.js",
        lineNumber: 43,
        columnNumber: 5
    }, this);
} // NOTE: You must ensure 'pool' is correctly imported or defined 
 // in this file for the 'getInvoices' function to work.
}),
"[project]/app/invoices/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/invoices/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b96de317._.js.map