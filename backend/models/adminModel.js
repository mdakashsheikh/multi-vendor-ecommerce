const mongoose = require('mongoose');

const adminSc = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    image: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: 'admin',
    },
})

module.exports = mongoose.model('admins', adminSc)