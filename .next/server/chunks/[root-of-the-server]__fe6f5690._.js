module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/prisma.ts
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
// Use a global variable to keep a single instance of PrismaClient 
// across hot reloads in development.
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
}),
"[externals]/moment-jalaali [external] (moment-jalaali, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("moment-jalaali", () => require("moment-jalaali"));

module.exports = mod;
}),
"[project]/pages/api/invoices.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// pages/api/invoices.ts
__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$moment$2d$jalaali__$5b$external$5d$__$28$moment$2d$jalaali$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/moment-jalaali [external] (moment-jalaali, cjs)");
;
;
async function handler(req, res) {
    // --- GET: Fetch all invoices (This part is correct for conversion back to Shamsi) ---
    if (req.method === 'GET') {
        try {
            const invoices = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].invoice.findMany({
                // 🚨 FIX START: Change orderBy to use an array for multi-field sorting 🚨
                orderBy: [
                    {
                        date: 'asc'
                    } // Secondary sort: Ensures correct chronological order for same dates
                ]
            });
            const shamsiInvoices = invoices.map((invoice)=>({
                    ...invoice,
                    // Conversion from DB (Gregorian) to Client (Shamsi)
                    date: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment$2d$jalaali__$5b$external$5d$__$28$moment$2d$jalaali$2c$__cjs$29$__["default"])(invoice.date).format('jYYYY/jMM/jDD')
                }));
            res.status(200).json(shamsiInvoices);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: 'Server error fetching invoices'
            });
        }
    } else if (req.method === 'POST') {
        // --- POST: Create a new invoice (FIXED) ---
        try {
            let { date, title, description, amount, store_name, type, category, has_receipt, has_invoice } = req.body;
            // 🚨 FIX 🚨
            // The frontend sends 'date' as a Miladi string (YYYY-MM-DD), so we can pass it 
            // directly to Prisma. The Date type in Prisma handles ISO/SQL strings automatically.
            const invoiceData = {
                store_name: store_name,
                // Pass the received Gregorian date string directly to Prisma.
                // If the string is empty or invalid, you might set it to null or use a conditional.
                // Assuming date is always a valid "YYYY-MM-DD" string from the client:
                date: date ? new Date(date) : undefined,
                title: title,
                amount: parseFloat(amount),
                type: type,
                category: category,
                description: description,
                has_receipt: !!has_receipt,
                has_invoice: !!has_invoice
            };
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].invoice.create({
                data: invoiceData
            });
            res.status(201).json({
                id: result.id
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: 'Server error creating invoice'
            });
        }
    } else {
        res.status(405).json({
            message: 'Method not allowed'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fe6f5690._.js.map