const platformPageViewRouter = require('express').Router();
const PlatformPage = require('../../../src/views/PlatformPage');
const {Platform, Course, Subcategory, Category} = require('../../../db/models')
platformPageViewRouter.route('/:id')
    .get(async(req,res)=>{
        const platform = await Platform.findByPk(req.params.id);
        const courses = await Course.findAll({where:{platform_id:platform.id}, raw:true})
        const subcats = [];
        const categories = [];
        for(const course of courses){
            const subcat = await Subcategory.findByPk(course.subcategory_id)
            subcats.push(subcat)
        }
        for(const subcat of subcats){
            const cat = await Category.findByPk(subcat.category_id)
            categories.push(cat)
        }
        const colors = ['#007bff','#28a745','#dc3545','#ffc107','#17a2b8','#343a40','#ff69b4'];
        res.send(res.renderComponent(PlatformPage,{title:'Home Page', user:res.locals.user, platform, courses, categories,  subcategories:subcats, colors}))
    })

module.exports = platformPageViewRouter
