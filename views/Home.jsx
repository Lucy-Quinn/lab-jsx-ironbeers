const React = require('react');
const Layout = require('./layout')
function Home() {

  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <img src=".././public/images/beer.png" alt="image of beer" />
        <a href="/beers">Check the Beers!</a>
        <a href="/random-beer">Check a Random Beer!</a>


      </main>
    </Layout>

  );

}


module.exports = Home;