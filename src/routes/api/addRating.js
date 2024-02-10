const addRating = require("express").Router();
const { Course, Category } = require("../../../db/models");


addRating.route("/:catId/:subcatId/:courseId").post(async (req, res) => {
    try {
        const { catId, subcatId, courseId } = req.params;
        const {rate} = req.body;

        const isExist = await Course.findByPk(courseId);
        const category = await Category.findByPk(catId);

        if (!isExist) {
            const channel = await Course.create({});
            res.status(200).json({ text: "OK" });
        } else {
            res.status(400).json({ text: "You can't add comments" });
        }
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }
});

module.exports = addRating;
