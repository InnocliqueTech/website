import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from 'models/user';



export default async function handler (req, res) {
    if(req.method === 'POST') {
        const {firstName, lastName, username, email, password} = req.body

        //Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            
            // Save the user to the database
            const newUser = await Users.create({
                firstName,
                lastName,
                username,
                email,
                password: hashedPassword,
            });
            return res.status(201).json({
                message: 'User registered successfully', 
                user: newUser
            })
        } catch (error) {
            console.error('Error registering user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}