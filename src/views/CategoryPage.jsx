const React = require('react');
const Layout = require('./Layout');
const CourseCard = require('./components/CourseCard')
module.exports = function CategoryPage({title, user, category, subcategories, courses, colors, platforms, flags, styles}){
    return(
        <Layout title={title} user={user}>
            <div className='categoryPage'>
                <h3><a href='/categories'>All categories</a> > {category.name}</h3>
                <h1>{category.name} courses</h1>
                <div className='subCatPageList'>
                    <ul>
                        {subcategories.map((subcat)=>(
                            <li key={subcat.id}>
                                <h3><a href={`/categories/${category.id}/${subcat.id}`}>{subcat.name}</a></h3>
                            </li>
                        ))}
                    </ul>
                </div>
                {user&&flags&&styles? (<div className='courseList'>
                    <ul>
                        {courses.map((course,index)=> {
                            const subcat = subcategories.find(subcat => subcat.id === course.subcategory_id);
                            const platform = platforms.find(plat=>plat.id === course.platform_id)
                            const color = colors[subcategories.indexOf(subcat) % colors.length];
                            const flag = flags[index];
                            const style =styles[index] ;
                            return (
                                <li key={course.id}>
                                    <CourseCard category={category} subcategory={subcat} color={color} course={course} platform={platform} user={user} flag={flag} style={style}/>
                                </li>
                            );
                        })}
                    </ul>
                </div>):(
                    <div className='courseList'>
                        <ul>
                            {courses.map((course)=> {
                                const subcat = subcategories.find(subcat => subcat.id === course.subcategory_id);
                                const platform = platforms.find(plat=>plat.id === course.platform_id)
                                const color = colors[subcategories.indexOf(subcat) % colors.length];
                                return (
                                    <li key={course.id}>
                                        <CourseCard category={category} subcategory={subcat} color={color} course={course} platform={platform} user={user}/>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}

            </div>
        </Layout>
    );
};


