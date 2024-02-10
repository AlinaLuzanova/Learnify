const React = require('react');

module.exports = function CourseCard({category, subcategory, color, course, platform}){
    return(
        <div className='courseComponent'>
            <div className="card" style={{ width: '18rem' }}>
                <div style={{ backgroundColor: color }} className="card-img-top" id='coloredCard'></div>
                <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <h6>On <a href={`/platforms/${platform.id}`}>{platform.name}</a></h6>
                    <p className="card-text">{course.description.split('.')[0]}</p>
                    <h6>{subcategory.name}</h6>
                    <h5></h5>
                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                         aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{ width: `${course.rating}%` }}></div>
                    </div>
                    <a href={`/categories/${category.id}/${course.name}`} className="btn btn-primary">Show more</a>
                    <h5><span style={{ color: '#28a745' }}>{course.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} RUB</span>  |  {course.duration} days</h5>
                </div>
            </div>
        </div>
    )
}
