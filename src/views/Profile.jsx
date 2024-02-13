const React = require('react');
const Layout = require('./Layout');
const CourseCard = require('./components/CourseCard');

module.exports = function Profile({ title, user, categories, subcategories, courses, platforms }) {
    return (
        <Layout title={title} user={user}>
            <div className='profileContainer'>
                <div className="card bg-light">
                    <div className="mb-4">
                        <h1 className="card-title">Welcome to your profile, {user.login}!</h1>
                        <p className="card-text">Here you can view and manage your saved courses.</p>
                    </div>
                    {courses.length ? (
                        <>
                            <h3 className="mb-3">Saved courses</h3>
                            <div className='courseList'>
                                <ul>
                                    {courses.map((course) => {
                                        const subcat = subcategories.find(subcat => subcat.id === course.subcategory_id);
                                        const category = categories.find(cat => cat.id === subcat.category_id);
                                        const platform = platforms.find(plat => plat.id === course.platform_id);
                                        return (
                                            <li key={course.id} className='profileCard' data-url={course.id}>
                                                <CourseCard category={category} subcategory={subcat} color='#ff69b4' course={course} platform={platform} user={user} flag='delete' style='deleteDesign'/>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </>
                    ) : (
                        <h3 className='mb-5'>No saved courses</h3>
                    )}
                </div>
            </div>
        </Layout>
    );
}
