const React = require('react');
const Layout = require('./layout');
const BeerCard = require('./components/BeerCard');

function Beers(props) {
    return (
        <Layout>
            <div>
                {/* We are maping over the beersFromApi array we received */}
                {
                    props.beersFromApi.map((beerObj) => {
                        return <BeerCard beer={beerObj} hideDetails={true} />;
                        {/* return (
                            <div>
                                <img src={beerObj.image_url} width="200" alt="" />
                                <h3>{beerObj.name}</h3>
                                <h5>{beerObj.tagline}</h5>
                                <p>{beerObj.description}</p>
                            </div>
                        ); */}
                    })
                }
            </div>
        </Layout>

    )
}

module.exports = Beers;
