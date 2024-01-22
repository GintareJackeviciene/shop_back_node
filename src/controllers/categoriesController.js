const { makeSqlQuery } = require("../helpers");

module.exports = {
  getAll: async (req, res, next) => {

    // sukuriam sql
    const sql = 'SELECT * FROM `categories`';

    // makeSqlQuery
    const [catsArr, error] = await makeSqlQuery(sql);

    // graznam klaida
    if (error) {
      console.log('getAll categories error ===');
      return next(error);
    }
   // arba kategorija
    res.json(catsArr);
  },
};