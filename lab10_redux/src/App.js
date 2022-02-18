import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import ItemPage from './pages/ItemPage/ItemPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import CarDetails from './pages/CarPage/CarDetails';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/catalog' exact component={ItemPage} />
        <Route path='/cars/:id' exact component={CarDetails} />
        <Route path='/cart' exact component={CartPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
