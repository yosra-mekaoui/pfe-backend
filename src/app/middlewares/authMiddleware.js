const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id).populate('role'); // Assurez-vous que findById est disponible sur User

    if (!user) return res.sendStatus(401);

    req.user = user;
    next();
  } catch (err) {
    console.error('JWT Verify Error:', err);
    return res.sendStatus(403);
  }
};

const authenticateRefreshToken = (req, res, next) => {
  const token = req.body.token;
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
};

const roleMiddleware = (requiredRole) => (req, res, next) => {
  if (!req.user || req.user.role.Role_Name !== requiredRole) {
    return res.status(403).json({ message: 'Access denied' }); // Forbidden
  }
  next();
};
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Authorization header missing' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token missing' });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id); // Récupération de l'utilisateur à partir du token

    if (!user) return res.status(401).json({ error: 'User not authenticated' });

    req.user = user; // Définition de req.user pour l'utilisateur authentifié
    req.userId = user._id; // Définition de req.userId avec l'ID de l'utilisateur

    next();
  } catch (err) {
    console.error('JWT Verify Error:', err);
    return res.status(403).json({ error: 'Invalid token' });
  }
};
module.exports = { authenticateToken, authenticateRefreshToken, roleMiddleware, authMiddleware };
