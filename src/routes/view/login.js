const loginViewRouter = require('express').Router();
const Login = require('../../../src/views/Login')
loginViewRouter.route('/login')
.get(async (req,res)=>{
    res.send(res.renderComponent(Login,{title:'Login Page'}))
})

module.exports = loginViewRouter
