const homeViewRouter = require('express').Router();
const Home = require('../../../src/views/Home');
homeViewRouter.route('/')
.get(async(req,res)=>{

    res.send(res.renderComponent(Home,{title:'Home Page', user:res.locals.user}))
})

module.exports = homeViewRouter
