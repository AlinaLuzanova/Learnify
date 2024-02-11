const React = require("react");

module.exports = function Comment({ user, rate, comment }) {
    return (
        <div className="comment">
            <div className="card">
                <div className="card-body" id='card-body'>
                    <h5 className="card-title">{user.login}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Rating: <span>{rate}</span></h6>
                    <p className="card-text">{comment}</p>
                </div>
            </div>
        </div>
    );
};
