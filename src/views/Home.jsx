const React = require('react');
const Layout = require('./Layout')

module.exports = function Home({title, user, params}){
    return(
        <Layout title={title} user={user}>
            {params && (
                <ul>
                    {params.map((param)=>{
                        <li key={param.id}>{param.title}</li>
                    })}
                </ul>
            )}
        </Layout>
    )
}
