const coursePageViewRouter = require('express').Router();
const {Category, Subcategory,Course,Platform,Rating,User, UserCourse} = require('../../../db/models');
const CoursePage = require('../../views/CoursePage');

coursePageViewRouter.route('/:catId/:subcatId/:courseId')
.get(async(req,res)=>{

        const {catId,subcatId,courseId} = req.params;
        const category = await Category.findByPk(catId);
        const course = await Course.findByPk(courseId);
        const subcategory = await Subcategory.findByPk(subcatId)
        const platform = await Platform.findOne({where:{id:course.platform_id}})
        const comments = await Rating.findAll({where:{course_id:courseId}})
        const creators = [];
        for(const com of comments){
                const creator = await User.findByPk(com.user_id)
                creators.push(creator)
        }

        if(res.locals.user){
                let flag = await UserCourse.findOne({where:{user_id:res.locals.user.id, course_id:course.id}})
                let style;
                if(flag){
                        style='deleteDesign';
                        flag = 'delete';

                }else{
                        style='saveDesign';
                        flag='save'
                }
                res.send(res.renderComponent(CoursePage, {title:course.name, user:res.locals.user,course,category,subcategory,platform,comments,creators,flag,style}))
        } else{
                res.send(res.renderComponent(CoursePage, {title:course.name, user:res.locals.user,course,category,subcategory,platform,comments,creators}))
        }



})
module.exports = coursePageViewRouter
