const registerApiRouter = require('express').Router();
const {User} = require('../../../db/models');
const bcrypt = require("bcrypt");

registerApiRouter.route('/register')
.post(async(req,res)=>{
    const {login, password, password2}= req.body;
    try{
        if(!login||!password||!password2){
            return res.status(401).json({message:'Need all fields'})
        }
        if(password!==password2 || password.length<8){
            return res.status(403).json({message:"Passwords do not match or password's length is less than 8" })
        }
        const user = await User.findOne({where:{login}});
        if(user){
            return res.status(409).json({message:'User with that login already exist'})
        }
        if(!user){
            const hashedPassword = await bcrypt.hash(password, 10);
            const hashedUser = await User.create({login,password:hashedPassword})
            req.session.userId = hashedUser.id;
            return res.status(200).json({message:'OK'})
        }
    } catch(err){
        res.status(500).json({error:err.message})
    }
})
module.exports = registerApiRouter
