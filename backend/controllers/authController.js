const AdminSc = require('../models/adminModel')

const adminLogin = async(req, res, next) => {
    console.log(req.body)
    const { email, password } = req.body;
   
    try {
        
        const admin = await AdminSc.findOne({ email });
        console.log(admin);

    } catch (error) {
        
    }
}

module.exports = {
    adminLogin,

}