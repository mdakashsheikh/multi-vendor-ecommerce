require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { dbCon } = require('./utils/db');

const app = express();
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000
dbCon();
app.use('/api/v1', require('./routes/authRoutes'));

app.listen(PORT, () => {
    console.log(`Listenin on PORT ${PORT}`);
})