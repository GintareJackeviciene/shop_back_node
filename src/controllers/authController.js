const chalk = require('chalk');
const bcrypt = require('bcryptjs');
const { makeSqlQuery } = require('../helpers');

const login = async (req, res, next) => {
    //pasiimti email ir plain password
    const { email, password } = req.body;

    //ieskoti db custumer pagal email
    const sql = 'SELECT * FROM customers WHERE email=?';
    const [rowsArr, error] = await makeSqlQuery(sql, [email]);

    if (error) {
        console.log('login error ===');
        return next(error);
    }

    // ar radom useri
    if (rowsArr.length === 0) {
        console.log('user not found ===');
        return next({ error: 'user not found' })
    }

    //radom useri

    // patikrinti ar sutampa slaptazodiziai

    res.json(rowsArr);
}
const register = async (req, res, next) => {
    // pasiimti duomenis kuriuos gavom
    const { email, password } = req.body;
    console.log('req.body ===', req.body);

    // uzkoduoti slaptazodi - bcrypt password
    const passwordHash = bcrypt.hashSync(password, 10);


    // irasyti i duomenu daze
    const sql = 'INSERT INTO `customers` (`email`, `password`) VALUES (?, ?)';
    const [resObj, error] = await makeSqlQuery(sql, [email, passwordHash]);

    if (error) {
        console.log('register error ===');
        next(error);
        return;
    }

    //sekmingas irasymas
    if (resObj.affectedRows === 1) {
        res.status(201).json({
            msg: 'user created',
            id: resObj.insertId,
        });
    }
    // kai uzklausa pavyko bet affectedRows !== 1
    res.end();
}

module.exports = {
    login,
    register,
}