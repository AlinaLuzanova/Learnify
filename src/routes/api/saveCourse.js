const saveApiRouter = require("express").Router();
const {Course, UserCourse} = require('../../../db/models');

saveApiRouter.route('/save/:courseId')
.post(async(req,res)=>{

    const {flag} = req.body;
    const course =  await Course.findByPk(req.params.courseId);
    if(res.locals.user){
        if(flag==='save'){
           const fav = await UserCourse.create({user_id:res.locals.user.id, course_id:course.id})
            return res.status(200).json({text: 'OK'})
        } if(flag==='delete'){
            await UserCourse.destroy({where:{user_id:res.locals.user.id, course_id:course.id}})
            return res.status(200).json({text: 'OK'})
        }

    } else{
        res.status(400).json({text:error})
    }
})
module.exports = saveApiRouter
