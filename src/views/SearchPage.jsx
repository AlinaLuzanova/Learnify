const React = require('react');
const Layout = require('./Layout');
const CourseCard = require('./components/CourseCard');

function SearchPage({ user, title, courses, categories, subcategories, platforms, flags, styles }) {
    return (
        <Layout user={user} title={title}>
            <div className="containerSearchPage">
                <h1>Results for your query:</h1>
                {courses && courses.length ? (
                    <div className='courseList'>
                        <ul>
                            {courses.map((course, index) => {
                                const subcat = subcategories.find(subcat => subcat.id === course.subcategory_id);
                                const platform = platforms.find(plat => plat.id === course.platform_id);
                                const category = categories.find(cat => cat.id === subcat.category_id);
                                const flag = flags ? flags[index] : null;
                                const style = styles ? styles[index] : null;
                                return (
                                    <li key={course.id}>
                                        <CourseCard category={category} subcategory={subcat} color='#28a745' course={course} platform={platform} user={user} flag={flag} style={style} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <h3>No results found</h3>
                )}
            </div>
        </Layout>
    );
}

module.exports = SearchPage;
