const homeViewRouter = require('express').Router();
const Home = require('../../../src/views/Home');
const {Platform} = require('../../../db/models')
homeViewRouter.route('/')
.get(async(req,res)=>{
    const platforms = await Platform.findAll({raw:true})
    console.log(platforms)
    res.send(res.renderComponent(Home,{title:'Home Page', user:res.locals.user, platforms}))
})

module.exports = homeViewRouter
