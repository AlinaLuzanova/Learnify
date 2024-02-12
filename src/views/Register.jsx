const React = require('react');
const Layout = require('./Layout')

module.exports = function Register({title}){
    return(
        <Layout title={title}>
            <form name="registerForm" action='/api/auth/register'>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Login</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" name='login' required/>
                    </div>

                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" name='email' required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" name='password' required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPasswordConfirm" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPasswordConfirm" name='password2' required
                               />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

        </Layout>
    )
}
