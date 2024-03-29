const React = require('react');
module.exports = function PlatformCard({Platform}){
    return(
        <div className='PlatformCard'>
            <div className="card" style={{ borderRadius: '.25rem',borderWidth: '2px' }}>
                 <div className='imgContainer'>
                <img src={Platform.image} className="card-img-top" alt="..." style={{ borderRadius: '.25rem' }}/>
                 </div>
                     <div className="card-body" id="platformCardBody">

                        <a href={`/platforms/${Platform.id}`}><h5 className="card-title">{Platform.name}</h5></a>
                        <p className="card-text">{Platform.description}</p>
                         <h6 style={{color:'#007bff'}}>Rating:</h6>
                         {Platform.rating ? (<h5>{Platform.rating} / 100</h5>) : (<h5>No rating yet</h5>)}
                        <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                             aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-danger" style={{ width: `${Platform.rating}%` }}></div>
                        </div>
                        <a href={Platform.website} className="card-link">Link to website</a>
                    </div>
            </div>
        </div>
    )
}
