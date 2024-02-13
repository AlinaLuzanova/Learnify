const React = require("react");
const Header = require("./components/Header");
const Footer = require('./components/Footer')
function Layout({ title = "Home Page", children, user }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <script defer src="/js/auth.js"></script>
            <script defer src='/js/newFavourite.js'></script>
            <script defer src='/js/delete.js'></script>
            <link rel="stylesheet" href="/styles/style.css" />
            <link rel="stylesheet" href="/styles/bootstrap.min.css"/>
            <link rel="stylesheet" href="/styles/font-awesome.min.css"/>
            <script defer src='/js/createNew.js'></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
        </head>
        <body>
        <Header user={user} />
        <div className='main-content'>
        {children}
        </div>
        <Footer/>
        <div className="modal" tabIndex="-1" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Error</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p id='myInput'>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="closeBtn" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}

module.exports = Layout;
