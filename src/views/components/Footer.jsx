const React = require('react');
module.exports = function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Contact Information</h5>
                        <span>Phone: +7 966 777 1424</span> | {' '}
                        <span>Email: alinaluzanova@gmail.com</span>
                    </div>

                    <div className="col-md-6">
                        <h5>Follow Me</h5>
                        <span>GitHub: <a href="https://github.com/AlinaLuzanova">AlinaLuzanova</a></span>
                    </div>
                </div>
            </div>
        </footer>

    )
}
