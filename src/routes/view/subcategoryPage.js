const subcategoryPageViewRouter = require('express').Router();
const {Category, Subcategory,Course,Platform, UserCourse} = require('../../../db/models');
const SubcategoryPage = require('../../views/SubcategoryPage');
const CategoryPage = require("../../views/CategoryPage");

subcategoryPageViewRouter.route('/:catId/:subcatId')
    .get(async (req, res) => {
        try {
            const {catId, subcatId} = req.params;
            const category = await Category.findByPk(catId);
            const subcategory = await Subcategory.findByPk(subcatId);
            //const platforms = await Platform.findAll({raw:true});
            const courses = await Course.findAll({where:{subcategory_id:subcategory.id}, raw:true})
            const platformsCourse = [];

            for (const course of courses) {
                const neddedPlatforms = await Platform.findAll({ where: { id: course.platform_id }, raw:true });
                platformsCourse.push(...neddedPlatforms);
            }


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
                res.send(res.renderComponent(SubcategoryPage,{ title: category.name, user: res.locals.user, category, subcategory, courses, platforms:platformsCourse, flags,styles }));
            } if(!res.locals.user){
                res.send(res.renderComponent(SubcategoryPage,{ title: category.name, user: res.locals.user, category, subcategory, courses, platforms:platformsCourse }));
            }

        } catch (error) {
            res.status(500).send({ error: 'An error occurred while fetching data.' });
        }
    });
module.exports = subcategoryPageViewRouter
