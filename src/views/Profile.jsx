const React = require('react');
const Layout = require('./Layout')
module.exports = function Profile({title,user,favourites, categories, subcategories, colors, courses, platforms}){
    return(
        <Layout title={title} user={user}>
<div className='profileContainer jumbotron'>
    <h1>{user.login}'s Profile</h1>
    {}
</div>
        </Layout>
    )
}
