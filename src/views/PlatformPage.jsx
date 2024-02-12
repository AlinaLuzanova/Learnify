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
                <div className="col-md-8 platformDescription">
                    <h1>{platform.name}</h1>
                    <h3 className="course-description">{platform.description}</h3>
                    <h4 style={{color:'#007bff'}}>Rating:</h4>
                    {platform.rating ? (<h3>{platform.rating} / 100</h3>) : (<h3>No rating yet</h3>)}
                    <h5>Website: <a href={platform.website}>{platform.website}</a></h5>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2 className='h2PlatformPage'>Courses Offered</h2>
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
