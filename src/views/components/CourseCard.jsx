const React = require('react');
module.exports = function CourseCard({course,platform}){
    return(
        <div className='CourseCard'>
            <div className="card">
                <img src={course.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">By {platform.name}</p>
                    <p className="card-text">Language: {course.language}</p>
                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                         aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{ width: `${course.rating}%` }}></div>
                    </div>
                    <a href={`course/${course.id}`} className="card-link">Learn More</a>
                </div>
            </div>
        </div>
    )
}
