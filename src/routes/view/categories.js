const categoriesViewRouter = require('express').Router();
const {Category, Subcategory} = require('../../../db/models');
const Categories = require('../../views/Categories')

categoriesViewRouter.route('/')
.get(async(req,res)=>{
    const categories = await Category.findAll({raw:true})
    const subcategories = await Subcategory.findAll({raw:true})
    res.send(res.renderComponent(Categories, {title:'All categories', user:res.locals.user, categories, subcategories}))
})
module.exports = categoriesViewRouter;
