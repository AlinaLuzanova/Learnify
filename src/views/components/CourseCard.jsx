const React = require('react');

module.exports = function CourseCard({category, subcategory, color, course, platform, user}){
    return(
        <div className='courseComponent'>
            <div className="card" style={{ width: '18rem' }}>
                <div style={{ backgroundColor: color }} className="card-img-top saveBTNContainer" id='coloredCard'>
                    {user &&  <button data-flag='save' className="btn saveBTN" type='submit' data-url={`/api/modify/save/${course.id}`}>save</button>}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <h6>On <a href={`/platforms/${platform.id}`}>{platform.name}</a></h6>
                    <p className="card-text">{course.description.split('.')[0]}</p>
                    <h6>{subcategory.name}</h6>
                    <h6 style={{color:'#007bff'}}>Rating:</h6>
                    {course.rating ? (<h5>{course.rating} / 100</h5>) : (<h5>No rating yet</h5>)}
                    <div className='progressContainer'>
                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                         aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{ width: `${course.rating}%` }}></div>
                    </div>
                    <a href={`/categories/${category.id}/${subcategory.id}/${course.id}`} className="btn btn-primary">Show more</a>
                </div>
                    <h5><span style={{ color: '#28a745' }}>{course.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} RUB</span>  |  {course.duration} days</h5>
                </div>
            </div>
        </div>
    )
}
