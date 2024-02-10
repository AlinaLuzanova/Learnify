const subcategoryPageViewRouter = require('express').Router();
const {Category, Subcategory,Course,Platform} = require('../../../db/models');
const SubcategoryPage = require('../../views/SubcategoryPage');

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
            console.log('category', category, 'subcategory',subcategory, 'courses', courses, 'platformsCourse',platformsCourse)


            res.send(res.renderComponent(SubcategoryPage,{ title: category.name, user: res.locals.user, category, subcategory, courses, platforms:platformsCourse }));
        } catch (error) {
            res.status(500).send({ error: 'An error occurred while fetching data.' });
        }
    });
module.exports = subcategoryPageViewRouter
