const platformPageViewRouter = require('express').Router();
const PlatformPage = require('../../../src/views/PlatformPage');
const {Platform, Course, Subcategory, Category,Rating, UserCourse} = require('../../../db/models')
const CategoryPage = require("../../views/CategoryPage");
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
        const ratingNull = await Course.findAll({where:{platform_id:platform.id}, raw:true})
        const rating = ratingNull.filter((course)=> course.rating>0)
        const ratingSum = rating.reduce((a,b)=>a+Number(b.rating),0)
        const ratingCount = rating.length;
        const ratingAvg = ratingSum/ratingCount;
        await platform.update({rating:ratingAvg});
        const colors = ['#007bff','#28a745','#dc3545','#ffc107','#17a2b8','#343a40','#ff69b4'];

        if(res.locals.user){
            const flags =[];
            const styles=[];

            for(const course of courses){
                const userCourses = await UserCourse.findOne({where:{user_id:res.locals.user.id, course_id:course.id}, raw:true});
                if(userCourses){
                    flags.push('delete')
                    styles.push('deleteDesign')
                }if(!userCourses){
                    flags.push('save')
                    styles.push('saveDesign')
                }
            }
            res.send(res.renderComponent(PlatformPage,{title:'Home Page', user:res.locals.user, platform, courses, categories,  subcategories:subcats, colors, flags, styles}))
        } if(!res.locals.user){
            res.send(res.renderComponent(PlatformPage,{title:'Home Page', user:res.locals.user, platform, courses, categories,  subcategories:subcats, colors}))
        }
    })

module.exports = platformPageViewRouter
