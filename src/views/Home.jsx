const React = require('react');
const Layout = require('./Layout');
const PlatformCard = require('./components/PlatformCard');

module.exports = function Home({ title, user, platforms }) {
    return (
        <Layout title={title} user={user}>
            {platforms && (
                <ul className='PlatformList'>
                    {platforms.map((platform) => (
                        <li key={platform.id}>
                            <PlatformCard Platform={platform} />
                        </li>
                    ))}
                </ul>
            )}
        </Layout>
    );
};
