const chalk = require('chalk');
const bcrypt = require('bcryptjs');

const login = async (req, res, next) => {
    res.json('login ing');
}
const register = async (req, res, next) => {
// pasiimti duomenis kuriuos gavom
const { email, password } = req.body;
console.log('req.body ===', req.body);

// uzkoduoti slaptazodi - bcrypt password
const passwordHash = bcrypt.hashSync(password, 10);


// irasyti i duomenu daze


    res.json(passwordHash);
}

module.exports ={
    login,
    register,
}