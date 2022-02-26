require('dotenv').config();

const jwt = require('jsonwebtoken');

export default function handler(req, res) {
  if (req.method == 'POST') {
    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m',
    });
    res.status(200).json({
      token: accessToken,
    });
  }
}
