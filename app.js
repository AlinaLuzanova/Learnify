require("@babel/register");
require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");

const PORT = process.env.PORT || 3000;

const app = express();

serverConfig(app);

//api routes import
const loginApiRouter = require('./src/routes/api/login');
const registerApiRouter = require('./src/routes/api/register');
const logoutApiRouter = require('./src/routes/api/logout');
const addRating = require('./src/routes/api/addRating');
const deleteApiRouter = require('./src/routes/api/delete');
const editApiRouter = require('./src/routes/api/edit');
const saveApiRouter = require('./src/routes/api/saveCourse')
//api routes usage
app.use('/api/auth', loginApiRouter, registerApiRouter,logoutApiRouter)
app.use('/api/modify',addRating,deleteApiRouter,editApiRouter,saveApiRouter)

//view routes import
const homeViewRouter = require('./src/routes/view/home');
const loginViewRouter = require('./src/routes/view/login');
const registerViewRouter = require('./src/routes/view/register');
const categoriesViewRouter = require('./src/routes/view/categories')
const categoryPageViewRouter = require('./src/routes/view/categoryPage')
const subcategoryPageViewRouter = require('./src/routes/view/subcategoryPage')
const coursePageViewRouter = require('./src/routes/view/coursePage')
const platformViewRouter = require('./src/routes/view/platforms');
const platformPageViewRouter = require('./src/routes/view/platformPage')
const profileView = require('./src/routes/view/profile')
//view routes usage
app.use('/', homeViewRouter);
app.use('/auth', loginViewRouter, registerViewRouter);
app.use('/platforms', platformViewRouter,platformPageViewRouter)
app.use('/categories', categoriesViewRouter,categoryPageViewRouter,subcategoryPageViewRouter,coursePageViewRouter)
app.use('/profile', profileView)


app.get("*", (req, res) => {
    res.status(404).send(res.renderComponent(PageNotFound));
});

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
