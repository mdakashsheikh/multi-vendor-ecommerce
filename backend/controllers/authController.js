const AdminSc = require('../models/adminModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { responseReturn } = require('../utils/response');
const { createToken } = require('../utils/tokenCreate');

const adminLogin = async(req, res, next) => {
    console.log(req.body)
    const { email, password } = req.body;
   
    try {
        
        const admin = await AdminSc.findOne({ email}).select('+password');
        if(!admin) {
            responseReturn(res, 404, { error: 'Email not found.'})
        }

        const validPassword = await bcrypt.compare(password, admin.password);
        if(!validPassword) {

        }
        const token = await createToken({
            id: admin.id,
            role: admin.role
        })

        res.cookie('accessToken', token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        })
        responseReturn(res, 200, { token, message: 'Login Success'})
    } catch (error) {
        responseReturn(res, 500, { error: error.message });
    }
}

module.exports = {
    adminLogin,

}