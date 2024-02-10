const categoryPageViewRouter = require('express').Router();
const {Category, Subcategory,Course,Platform} = require('../../../db/models');
const CategoryPage = require('../../views/CategoryPage');

categoryPageViewRouter.route('/:id')
    .get(async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id);
            const subcategories = await Subcategory.findAll({ where: { category_id: category.id }, raw: true });
            const platforms = await Platform.findAll({raw:true})
            const courses = [];
            const platformsCourse = [];

            for (const subcat of subcategories) {
                const coursesSubcat = await Course.findAll({ where: { subcategory_id: subcat.id }, raw:true });
                courses.push(...coursesSubcat);
            }

            for (const course of courses) {
                const neddedPlatforms = await Platform.findAll({ where: { id: course.platform_id }, raw:true });
                platformsCourse.push(...neddedPlatforms);
            }

            console.log(platformsCourse)



            const colors = ['#007bff','#28a745','#dc3545','#ffc107','#17a2b8','#343a40','#ff69b4'];

            res.send(res.renderComponent(CategoryPage,{ title: category.name, user: res.locals.user, category, subcategories, courses, colors, platforms:platformsCourse }));
        } catch (error) {
            res.status(500).send({ error: 'An error occurred while fetching data.' });
        }
    });
module.exports = categoryPageViewRouter
