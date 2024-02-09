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
const createNewApiRouter = require('./src/routes/api/createNew');
const deleteApiRouter = require('./src/routes/api/delete');
const editApiRouter = require('./src/routes/api/edit');
//api routes usage
app.use('/api/auth', loginApiRouter, registerApiRouter,logoutApiRouter)
app.use('/api/modify',createNewApiRouter,deleteApiRouter,editApiRouter)

//view routes import
const homeViewRouter = require('./src/routes/view/home');
const loginViewRouter = require('./src/routes/view/login');
const registerViewRouter = require('./src/routes/view/register');
const categoriesViewRouter = require('./src/routes/view/categories')
//view routes usage
app.use('/', homeViewRouter);
app.use('/auth', loginViewRouter, registerViewRouter);
app.use('/categories', categoriesViewRouter)


app.get("*", (req, res) => {
    res.status(404).send(res.renderComponent(PageNotFound));
});

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
