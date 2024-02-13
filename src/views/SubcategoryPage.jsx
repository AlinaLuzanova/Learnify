const React = require('react');
const Layout = require('./Layout');
const CourseCard = require('./components/CourseCard');

module.exports = function SubcategoryPage({ title, user, category, subcategory, courses, platforms,flags,styles }) {
    return (
        <Layout title={title} user={user}>
            <div className='categoryPage'>
                <h3><a href='/categories'>All categories</a> > <a href={`/categories/${category.id}`}>{category.name}</a> > {subcategory.name}</h3>
                <h1>{subcategory.name} courses</h1>
                {user&&flags&&styles? (<div className='courseList'>
                    <ul>
                        {courses.map((course,index)=> {
                            const platform = platforms.find(plat=>plat.id === course.platform_id)

                            const flag = flags[index];
                            const style =styles[index] ;
                            return (
                                <li key={course.id}>
                                    <CourseCard category={category} subcategory={subcategory} color='#ffc107' course={course} platform={platform} user={user} flag={flag} style={style}/>
                                </li>
                            );
                        })}
                    </ul>
                </div>):(
                    <div className='courseList'>
                        <ul>
                            {courses.map((course)=> {
                                const platform = platforms.find(plat=>plat.id === course.platform_id)
                                return (
                                    <li key={course.id}>
                                        <CourseCard category={category} subcategory={subcategory} color='#28a745' course={course} platform={platform} user={user}/>
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

