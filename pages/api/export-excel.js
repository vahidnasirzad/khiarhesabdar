// pages/api/export-excel.js
import pool from '../../lib/db';
import * as XLSX from 'xlsx';
import moment from 'moment-jalaali';


export default async function handler(req, res) {
  try {
    // 1️⃣ Get all data from invoices table
    const [rows] = await pool.query('SELECT * FROM invoices');

    const shamsiRows = rows.map(row => ({
    ...row,
    date: row.date ? moment(row.date).format('jYYYY/jMM/jDD') : '', // convert to Shamsi string
    }));
      

    // 2️⃣ Convert to Excel sheet
    const worksheet = XLSX.utils.json_to_sheet(shamsiRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Invoices');

    // 3️⃣ Write workbook to buffer
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // 4️⃣ Send as downloadable file
    res.setHeader('Content-Disposition', 'attachment; filename=invoices.xlsx');
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.send(buffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error exporting data', error });
  }
}
