const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const generateRandomString = (length) => {
  return crypto.randomBytes(length).toString('hex');
};

// Generate a 32-character random string
const jwtSecret = generateRandomString(32);
console.log(jwtSecret, "jwtSecret")

// Write the JWT secret to the .env file
const envFilePath = path.join(__dirname, '..', '.env'); // Adjust the path as needed
fs.writeFileSync(envFilePath, `JWT_SECRET=${jwtSecret}\n`, { flag: 'a' });
