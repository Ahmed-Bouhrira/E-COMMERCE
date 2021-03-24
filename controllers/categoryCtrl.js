const Category = require("../models/categoryModel");
const categoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.findOne();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
module.exports = categoryCtrl;
