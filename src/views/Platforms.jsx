const React = require('react');
const PlatformCard = require("./components/PlatformCard");
const Layout = require('./Layout');

module.exports = function Platforms({ user, title, platforms }) {
    return (
        <Layout title={title} user={user}>
            <div className="introduction">
                <h2>Welcome to our Learning Platforms!</h2>
                <p>Explore our collection of diverse learning platforms, each offering unique courses and resources to help you achieve your learning goals.</p>
            </div>
            <ul className='PlatformList'>
                {platforms.map((platform) => (
                    <li key={platform.id}>
                        <PlatformCard Platform={platform} />
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
