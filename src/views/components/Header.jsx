const React = require('react');
module.exports = function Header({user}){
    return(
        <div className='Header'>
            <hr className="border border-Secondary border-3 opacity-50"/>
            <nav className="navbar" >
                <div className="container-fluid">

                    <h2><a href='/'>Learnify</a></h2>
                    <a className="navbar-brand" href='/categories'>All categories</a>
                    <a className="navbar-brand" href='/platforms'>Platforms</a>
                    {user ? (
                        <>
                        <a href='/api/auth/logout'>Logout</a>
                        <a href='/profile'>Profile</a>
                        </>
                    ):(
                        <>
                        <a href='/auth/login'>Login</a>
                        <a href='/auth/register'>Sign up</a>
                        </>
                    )}
                    <form className="d-flex" role="search" name='searchForm' method='post' action='/api/search' data-url='/api/search'>
                        <input className="form-control me-2" type="search" placeholder="Find course" aria-label="Search" name='query' />
                            <button className="btn btn-outline-success" type="submit">go</button>
                    </form>
                </div>
            </nav>
            <hr className="border border-Secondary border-3 opacity-50"/>
        </div>
    )
}
