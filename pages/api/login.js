// pages/api/login.ts (or pages/api/login.js)

import { serialize } from 'cookie';
// 1. Import the single Prisma client instance
import { prisma } from '../../lib/prisma'; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // --- OLD: const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

    // 2. Use Prisma to get the user from the new Postgres database
    const user = await prisma.user.findUnique({
      where: {
        // NOTE: In Prisma, you access the model name (User) and then the field (username).
        username: username,
      },
    });
    
    // Check if user was found
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // NOTE: If you are using Neon Auth, the password should be HASHED.
    // For now, we keep your simple check.
    const isValid = password === user.password; 
    
    if (!isValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // 3. Keep cookie logic the same
    res.setHeader('Set-Cookie', serialize('token', user.id.toString(), {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 روز
    }));

    // NOTE: Make sure your 'User' model in schema.prisma has a 'role' field
    res.status(200).json({ message: 'Login successful', role: user.role });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}