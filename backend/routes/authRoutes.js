const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware')
const { adminLogin, getUser } = require('../controllers/authController');
const router = express.Router();

router.post('/admin/login', adminLogin);
router.get('/get/user', authMiddleware, getUser);

module.exports = router;