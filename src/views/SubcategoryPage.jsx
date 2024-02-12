const React = require('react');
const Layout = require('./Layout');
const CourseCard = require('./components/CourseCard');

module.exports = function SubcategoryPage({ title, user, category, subcategory, courses, platforms }) {
    return (
        <Layout title={title} user={user}>
            <div className='categoryPage'>
                <h3><a href='/categories'>All categories</a> > <a href={`/categories/${category.id}`}>{category.name}</a> > {subcategory.name}</h3>
                <h1>{subcategory.name} courses</h1>
                <div className='courseList'>
                    <ul>
                        {courses.map((course) => {
                            const platform = platforms.find(plat => plat.id === course.platform_id);
                            const color = '#28a745';
                            return (
                                <li key={course.id}>
                                    <CourseCard category={category} subcategory={subcategory} color={color} course={course} platform={platform} user={user}/>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

