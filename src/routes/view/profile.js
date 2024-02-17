const profileView = require('express').Router()
const {UserCourse,Category, Subcategory, Course, Platform} = require('../../../db/models')
const Profile = require('../../views/Profile')
profileView.route('/')
.get(async(req,res)=>{
    if(res.locals.user){
        const favourites = await UserCourse.findAll({where:{user_id:res.locals.user.id}})
        const courses = [];
        const subcategories =[];
        const categories = [];
        const platforms =[];
        for(const fav of favourites){
            const course = await Course.findByPk(fav.course_id)
            const subcat = await Subcategory.findByPk(course.subcategory_id);
            const cat = await Category.findByPk(subcat.category_id)
            const platform = await Platform.findByPk(course.platform_id)
            courses.push(course)
            subcategories.push(subcat)
            categories.push(cat)
            platforms.push(platform)
        }

        res.send(res.renderComponent(Profile,{title:`${res.locals.user.login}'s profile`,user:res.locals.user,favourites, categories, subcategories, courses, platforms}))
    }
})
module.exports = profileView
