const React = require('react');
const Layout = require('./Layout')

module.exports = function Login({title}){
    return(
        <Layout title={title}>
            <form name="loginForm" action='/api/auth/login'>
                <div className="row mb-3">
                    <label htmlFor="inputEmail4" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail4" name = 'login'/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword4" name = 'password'/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>

        </Layout>
    )
}
