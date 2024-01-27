const mongoose = require('mongoose');

module.exports.dbCon = async() => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('Database Connected')
    } catch (error) {
        console.log(error.message);
    }
}