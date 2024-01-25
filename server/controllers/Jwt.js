const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');




function authenticateToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json('Access denied');
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json('Invalid token');
        }

        req.user = user;
        next();
    });
}


// router.get('/todo', authenticateToken, (req, res) => {
//     res.json('Protected route');
// });



module.exports = authenticateToken
