const { makeSqlQuery } = require("../helpers");

module.exports = {
    getAll: async (req, res, next) => {
        //sukuriam sql
        const sql = 'SELECT * FROM `items`';

        //makeSqlQuery
        const [itemsArr, error] = await makeSqlQuery(sql);

        //grazinam klaida
        if (error) {
            console.log('getAll items error===');
            return next(error);
        }
        //arba items
        res.json(itemsArr)
    },
    getSingle: async (req, res, nest) => { },
    create: async (req, res, nest) => { },
    delete: async (req, res, nest) => { },
}