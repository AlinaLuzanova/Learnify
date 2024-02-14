const searchViewRouter = require('express').Router();
const { UserCourse, Category, Subcategory, Course, Platform } = require('../../../db/models');
const SearchPage = require('../../views/SearchPage');
const Op = require('sequelize').Op;

searchViewRouter.route('/:query')
    .get(async (req, res) => {
        const { query } = req.params;
        const courses = await Course.findAll({ where: { name: { [Op.like]: '%' + query + '%' } } });
        const subcategories = [];
        const categories = [];
        const platformsCourse = [];

        for (const course of courses) {
            const subcat = await Subcategory.findByPk(course.subcategory_id);
            subcategories.push(subcat);
        }
        for (const subcat of subcategories) {
            const cat = await Category.findByPk(subcat.category_id);
            categories.push(cat);
        }

        for (const course of courses) {
            const neddedPlatforms = await Platform.findAll({ where: { id: course.platform_id }, raw: true });
            platformsCourse.push(...neddedPlatforms);
        }

        if (res.locals.user) {
            const flags = [];
            const styles = [];
            for (const course of courses) {
                const userCourses = await UserCourse.findOne({ where: { user_id: res.locals.user.id, course_id: course.id }, raw: true });
                if (userCourses) {
                    flags.push('delete');
                    styles.push('deleteDesign');
                } else {
                    flags.push('save');
                    styles.push('saveDesign');
                }
            }
            res.send(res.renderComponent(SearchPage, { title: 'search results', user: res.locals.user, categories, subcategories, courses, platforms: platformsCourse, flags, styles }));
        } else {
            res.send(res.renderComponent(SearchPage, { title: 'search results', user: res.locals.user, categories, subcategories, courses, platforms: platformsCourse }));
        }
    });

module.exports = searchViewRouter;
