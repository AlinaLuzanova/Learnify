const searchAPIRouter = require('express').Router();
const { UserCourse, Category, Subcategory, Course, Platform } = require('../../../db/models');
const Op = require('sequelize').Op;

searchAPIRouter.route('/')
    .post(async (req, res) => {
        const { query } = req.body;
        const courses = await Course.findAll({ where: { name: { [Op.like]: '%' + query + '%' } } });
        console.log('-------------',courses)
        if (courses.length > 0) {
            res.status(200).json({ text: 'OK' });
        } else {
            res.status(404).json({ message: 'ERROR' });
        }
    })
module.exports = searchAPIRouter;
