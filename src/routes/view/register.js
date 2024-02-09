const registerViewRouter = require('express').Router();
const Register = require('../../../src/views/Register')
registerViewRouter.route('/register')
    .get(async (req,res)=>{
        res.send(res.renderComponent(Register, {title:'Register Page'}))
    })
module.exports = registerViewRouter
