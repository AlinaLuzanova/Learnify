const coursePageViewRouter = require('express').Router();
const {Category, Subcategory,Course,Platform} = require('../../../db/models');
const CoursePage = require('../../views/CoursePage');

coursePageViewRouter.route('/:catId/:subcatId/:courseId')
.get(async(req,res)=>{

        const {catId,subcatId,courseId} = req.params;
        const category = await Category.findByPk(catId);
        const course = await Course.findByPk(courseId);
        const subcategory = await Subcategory.findByPk(subcatId)
        const platform = await Platform.findOne({where:{id:course.platform_id}})
        res.send(res.renderComponent(CoursePage, {title:course.name, user:res.locals.user,course,category,subcategory,platform}))
})
module.exports = coursePageViewRouter
