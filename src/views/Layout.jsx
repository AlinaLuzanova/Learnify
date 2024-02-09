const React = require("react");
const Header = require("./components/Header");
function Layout({ title = "Home Page", children, user }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <script defer src="/js/auth.js"></script>
            <link rel="stylesheet" href="/styles/style.css" />
            <link rel="stylesheet" href="/styles/bootstrap.min.css"/>
        </head>
        <body>
        <Header user={user} />
        {user && (
            <div className="headerEmail">{`You logged in by: ${user.login}`}</div>
        )}
        {children}
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
