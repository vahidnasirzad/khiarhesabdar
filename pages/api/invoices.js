import pool from '../../lib/db';
import moment from 'moment';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [rows] = await pool.query('SELECT * FROM invoices');
      const invoices = rows.map(row => ({
        ...row,
        date: row.date ? row.date.toISOString().split('T')[0] : null
      }));
      res.status(200).json(invoices);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  } else if (req.method === 'POST') {
    try {
      let { date, title, description, amount, store_name, type, category, has_receipt, has_invoice } = req.body;

      // اطمینان از فرمت YYYY-MM-DD
      if (date) {
        date = moment(date).format('YYYY-MM-DD');
      }

      const [result] = await pool.query(
        `INSERT INTO invoices (store_name, date, title, amount, type, category, description, has_receipt, has_invoice) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [store_name, date, title, amount, type, category, description, has_receipt ? 1 : 0, has_invoice ? 1 : 0]
      );

      res.status(201).json({ id: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

