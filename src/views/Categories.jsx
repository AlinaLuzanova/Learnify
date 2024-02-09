const React = require('react');
const Layout = require('./Layout');
const Category = require('./components/Category');
module.exports = function Categories({title, user, categories, subcategories}){
    return(
        <Layout title={title} user={user}>
            <div className='category'>
            <ul>
                {categories.map((category)=>{
                    const catSubcategories = subcategories.filter(subcat => subcat.category_id === category.id);
                    return (
                        <li key={category.id}>
                            <Category category={category} subcategories={catSubcategories}/>
                        </li>
                    );
                })}
            </ul>
            </div>
        </Layout>
    )
}
