import jwt from 'jsonwebtoken';


export const generateToken = (user) => {
  
  const payload = {
    id: user._id, // User's MongoDB ID
    email: user.email, // User's email
  };

  
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d', // Token expires in 7 days
  });
};


export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
