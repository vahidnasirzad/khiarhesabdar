import pool from '../../lib/db';
import { serialize } from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // گرفتن کاربر از دیتابیس
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = rows[0];
    const isValid = password === user.password; // ساده برای شروع
    if (!isValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // ساخت cookie session ساده
    res.setHeader('Set-Cookie', serialize('token', user.id.toString(), {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 روز
    }));

    res.status(200).json({ message: 'Login successful', role: user.role });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
