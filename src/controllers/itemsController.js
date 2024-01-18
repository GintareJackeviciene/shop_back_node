const APIError = require('../apiError/ApiError');
const { makeSqlQuery } = require('../helpers');

module.exports = {
  getAll: async (req, res, next) => {
    // sukuriam sql
    const sql = 'SELECT * FROM `items` WHERE isDeleted=0';

    // makeSqlQuery
    const [itemsArr, error] = await makeSqlQuery(sql);

    // graznam klaida
    if (error) {
      console.log('getAll items error ===');
      return next(error);
    }

    // arba items

    res.json(itemsArr);
  },
  getSingle: async (req, res, next) => {
    const { itemId } = req.params;
    // sukuriam sql
    const sql = 'SELECT * FROM `items` WHERE id=?';

    // makeSqlQuery
    /** @type {[Array, Object]} itemsArr */
    const [itemsArr, error] = await makeSqlQuery(sql, [itemId]);

    // graznam klaida
    if (error) {
      console.log('getAll items error ===');
      return next(error);
    }

    // neradom nei vieno objekto
    if (itemsArr.length === 0) {
      return next(new APIError('Post was not found', 404));
    }

    // arba item

    res.json(itemsArr[0]);
  },
    
    create: async (req, res, nest) => { },
    delete: async (req, res, nest) => { },
}