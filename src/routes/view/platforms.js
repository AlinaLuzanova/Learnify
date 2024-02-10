const platformViewRouter = require('express').Router();
const Platforms = require('../../../src/views/Platforms');
const {Platform} = require('../../../db/models')
platformViewRouter.route('/')
    .get(async(req,res)=>{
        const platforms = await Platform.findAll({raw:true})
        res.send(res.renderComponent(Platforms,{title:'Home Page', user:res.locals.user, platforms}))
    })

module.exports = platformViewRouter
