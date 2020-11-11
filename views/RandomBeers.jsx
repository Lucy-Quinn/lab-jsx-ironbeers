const React = require('react');
const Layout = require('./layout');
const BeerCard = require('./components/BeerCard')

function RandomBeers(props) {
    return (
        <Layout>

            <BeerCard beer={props.responseFromAPI[0]} />



        </Layout>
    )
}

module.exports = RandomBeers;
