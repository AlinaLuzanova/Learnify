const loginApiRouter = require("express").Router();
const {User} = require('../../../db/models');
const bcrypt = require("bcrypt");
loginApiRouter.route('/login')
.post(async(req,res)=>{
    try{
        const {login,password} = req.body;
        if(!login || !password){
            return res.status(400).json({message:'Need all fileds'})
        }
        const user = await User.findOne({where:{login}});
        const isSamePassword = await bcrypt.compare(password,user.password);
        if(user&&isSamePassword){
            req.session.userId = user.id;
            return res.status(200).json({ message: "OK" });
        } else {
            res.status(404).json({ message: "Incorrect login or password or unauthorized" });
        }
    }catch(err){
        console.log(err)
        res.status(500).json({'error':err.message})
    }
})

module.exports = loginApiRouter
