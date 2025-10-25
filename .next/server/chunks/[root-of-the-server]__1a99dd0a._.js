module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/mysql2/promise [external] (mysql2/promise, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mysql2/promise", () => require("mysql2/promise"));

module.exports = mod;
}),
"[project]/lib/db.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mysql2$2f$promise__$5b$external$5d$__$28$mysql2$2f$promise$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mysql2/promise [external] (mysql2/promise, cjs)");
;
const pool = __TURBOPACK__imported__module__$5b$externals$5d2f$mysql2$2f$promise__$5b$external$5d$__$28$mysql2$2f$promise$2c$__cjs$29$__["default"].createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'accounting_app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const __TURBOPACK__default__export__ = pool;
}),
"[externals]/moment [external] (moment, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("moment", () => require("moment"));

module.exports = mod;
}),
"[project]/pages/api/invoices.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/moment [external] (moment, cjs)");
;
;
async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const [rows] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"].query('SELECT * FROM invoices');
            const invoices = rows.map((row)=>({
                    ...row,
                    date: row.date ? row.date.toISOString().split('T')[0] : null
                }));
            res.status(200).json(invoices);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: 'Server error'
            });
        }
    } else if (req.method === 'POST') {
        try {
            let { date, title, description, amount, store_name, type, category, has_receipt, has_invoice } = req.body;
            // اطمینان از فرمت YYYY-MM-DD
            if (date) {
                date = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])(date).format('YYYY-MM-DD');
            }
            const [result] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"].query(`INSERT INTO invoices (store_name, date, title, amount, type, category, description, has_receipt, has_invoice) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
                store_name,
                date,
                title,
                amount,
                type,
                category,
                description,
                has_receipt ? 1 : 0,
                has_invoice ? 1 : 0
            ]);
            res.status(201).json({
                id: result.insertId
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: 'Server error'
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1a99dd0a._.js.map