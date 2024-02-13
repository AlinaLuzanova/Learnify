const React = require('react');
const Layout = require('./Layout');
const Comment = require('./components/Comment');
module.exports = function CoursePage({title, user, course, category, subcategory, platform, comments, creators, flag,style}) {
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
                    <h1>Course <span style={{ color: '#28a745' }}>{course.name}</span> by <a href={`/platforms/${platform.id}`}>{platform.name}</a></h1>
                    <div>
                    <h3 className="course-description">{course.description}</h3>
                        {user && <button id="saveBTNPage" data-flag={flag} className={`btn saveBTN ${style}`} type='submit' data-url={`/api/modify/save/${course.id}`}>{flag}</button>}
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
                <h4 style={{color:'#007bff'}}>Rating:</h4>
                {course.rating ? (<h3>{course.rating} / 100</h3>) : (<h3>No rating yet</h3>)}
                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                     aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-danger" style={{ width: `${course.rating}%` }}></div>
                </div>
                {user ? (
                    <div className="rating-form">
                    <h4>Share your experience</h4>
                    <form name={'ratingForm'} method="post" action={`/api/modify/comment/${course.id}`} data-url={`/api/modify/comment/${course.id}`}>
                        <div className="form-group">
                            <input type="number" className="form-control" name='numberInput' id="numberInput" min="1" max="100" placeholder="Add rate from 1 to 100"/>
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" name='commentInput' id="commentInput" rows="3"
                                      placeholder="Add comment here"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                    </div>
                    ):(
                    <h3>Login or sign up to rate and write comments</h3>
                )}
                <div className="commentsContainer">
                    <h3>Comments and rates</h3>
                    <ul>
                        {comments.map(comment => {
                            const creator = creators.find(creator => creator.id === comment.user_id);
                            return (<li key={comment.id}>
                                <Comment comment={comment.comment} user={creator} rate={comment.rate}/>
                            </li>)
                        })}
                    </ul>
                </div>

            </div>
        </Layout>
    )
}
