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
            const course = await Course.findbyPk(fav.course_id)
            const subcat = await Subcategory.findByPk(course.subcategory_id);
            const cat = await Category.findByPk(subcat.category_id)
            const platform = await Platform.findByPk(course.platform_id)
            courses.push(course).filter((item)=> (courses.indexOf(item)+1)===(courses.indexOf(item)))
            subcategories.push(subcat).filter((item)=> (courses.indexOf(item)+1)===(courses.indexOf(item)))
            categories.push(cat).filter((item)=> (courses.indexOf(item)+1)===(courses.indexOf(item)))
            platforms.push(platform).filter((item)=> (courses.indexOf(item)+1)===(courses.indexOf(item)))
        }

        res.send(res.renderComponent(Profile,{title:`${res.locals.user}'s profile`,user:res.locals.user,favourites, categories, subcategories, colors, courses, platforms}))
    }
})
