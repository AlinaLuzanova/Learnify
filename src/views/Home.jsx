const React = require('react');
const Layout = require('./Layout');


module.exports = function Home({ title, user }) {
    return (
        <Layout title={title} user={user}>
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Learnify!</h1>
                <p className="lead">The ultimate platform for learning anything, anytime, anywhere.</p>
                <hr className="my-4"/>
                    <p>Explore our vast collection of courses from top educators around the world.</p>
                    <a className="btn btn-primary btn-lg" href="/categories" role="button">Get Started </a>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body pic">
                            <h5 className="card-title">Popular Courses</h5>
                            <img src='https://i.ytimg.com/vi/njqec0G_Wdc/maxresdefault.jpg' className="card-img-top" alt="Popular Courses Image" style={{height: 'auto', width: '100%'}} />
                            <p className="card-text">Discover trending courses that everyone is talking about.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body pic">
                            <h5 className="card-title">New Arrivals</h5>
                            <img src='https://img2.cgtrader.com/items/2110176/5b5d118466/medicine-pill-9-3d-model-obj-mtl-blend-dae-abc.jpg'  className="card-img-top" alt="Popular Courses Image" style={{height: 'auto', width: 'inherit'}} />
                            <p className="card-text">Check out the latest courses added to our platform.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body smallCard">
                            <h5 className="card-title">Learn Anywhere</h5>
                            <p className="card-text">Access your courses on any device, anytime.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body smallCard">
                            <h5 className="card-title">Expert Instructors</h5>
                            <p className="card-text">Learn from industry experts with real-world experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body smallCard">
                            <h5 className="card-title">Personalized Learning</h5>
                            <p className="card-text">Customize your learning path based on your interests and goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
