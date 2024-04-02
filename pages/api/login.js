import { Password } from '@mui/icons-material';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from 'models/user';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {username, email, password } = req.body;

      // find user by email
      const user = await Users.findOne({ email });

      // If user not found or password is incorrect, return error
      if (!username || !user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign({ useriId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      })
      return res.status(200).json({ token });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
