const React = require('react');
const Layout = require('./Layout')
const CourseCard = require("./components/CourseCard");
module.exports = function PlatformPage({ title, user, platform, courses, categories, subcategories, colors }) {
    return (
        <Layout title={title} user={user}>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={platform.image} className="img-fluid rounded" alt={platform.name} />
                </div>
                <div className="col-md-8">
                    <h1>{platform.name}</h1>
                    <p>{platform.description}</p>
                    <p>Rating: {platform.rating}</p>
                    <p>Website: <a href={platform.website}>{platform.website}</a></p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Courses Offered</h2>
                    <div className='courseList'>
                        <ul>
                            {courses.map((course)=> {
                                const subcat = subcategories.find(subcat => subcat.id === course.subcategory_id);
                                const category = categories.find(cat => cat.id === subcat.category_id)
                                const color = colors[subcategories.indexOf(subcat) % colors.length];
                                return (
                                    <li key={course.id}>
                                        <CourseCard category={category} subcategory={subcat} color={color} course={course} platform={platform}/>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
}
