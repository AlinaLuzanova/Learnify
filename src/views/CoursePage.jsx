const React = require('react');
const Layout = require('./Layout');

module.exports = function CoursePage({title, user, course, category, subcategory, platform}) {
    return (
        <Layout title={title} user={user}>
            <div className='headerLink'>
            <h3><a href='/categories'>All categories</a> > <a href={`/categories/${category.id}`}>{category.name}</a> >
                <a href={`/categories/${category.id}/${subcategory.id}`}>{subcategory.name}</a>
                > {course.name}
            </h3>
        </div>
            <div className='cardPage'>

                <div className="course-info">
                    <h1>Course <span style={{ color: '#28a745' }}>{course.name}</span> by <a href={`/${platform.id}`}>{platform.name}</a></h1>
                    <div>
                    <h3 className="course-description">{course.description}</h3>
                </div>
                </div>

                <table className="table course-details">
                    <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col" className='colTab'>Price</th>
                        <th scope="col" className='colTab'>Duration</th>
                        <th scope="col" className='colTab'>Language</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{subcategory.name}</td>
                        <td className="table-success colTab">{course.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} RUB</td>
                        <td className='colTab'>{course.duration} days</td>
                        <td className='colTab'>{course.language}</td>
                    </tr>
                    </tbody>
                </table>

                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                     aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-danger" style={{ width: `${course.rating}%` }}></div>
                </div>
                {user ? (
                    <div className="container mt-5">
                        <h4>Rate on a 100-point scale:</h4>
                        <form id='ratingForm' name='ratingForm' method='POST' data-url={`/api/categories/${category.id}/${subcategory.id}/${course.id}`} action={`/api/categories/${category.id}/${subcategory.id}/${course.id}`}>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    min="0"
                                    max="100"
                                />
                            </div>
                            <div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                        </form>
                    </div>
                ):(
                    <h3>Login or sign up to rate and write comments</h3>
                )}
            </div>
        </Layout>
    )
}
