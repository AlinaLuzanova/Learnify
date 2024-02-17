const addRating = require("express").Router();
const { Course, Category, Rating, User } = require("../../../db/models");


addRating.route("/comment/:courseId").post(async (req, res) => {
    try {
        const { courseId } = req.params;
        const {numberInput, commentInput} = req.body;
        const isExist = await Course.findByPk(courseId);
        if (isExist) {
            const user = res.locals.user;
            const rating = await Rating.create({
                user_id: user.id,
                course_id: isExist.id,
                rate: Number(numberInput),
                comment: commentInput
            });


            const courseRate = await Rating.findAll({ where: { course_id: isExist.id }, raw: true });


            const courseRateSum = courseRate.reduce((sum, item) => sum + Number(item.rate), 0);


            const amoutOfComments = courseRate.length;


            const courseRateAvg = courseRateSum / amoutOfComments;
            await isExist.update({ rating: parseFloat(courseRateAvg.toFixed(2)) });

            const creator = await User.findByPk(rating.user_id);

            res.status(200).json({ text: "OK", login: creator.login, ratingId: rating.id,rating:courseRateAvg });
        } else {
            res.status(400).json({ text: "You can't add comments" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({text:err});
    }
});

module.exports = addRating;
