import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import ProductEdit from './ProductEdit';

const initialProducts = [
    {name: "Vodka", description: "Happy juice", id: "1"} ,
    {name: "Joint rolled by snoop dogg", description: "self explanatory", id: "2"} ,
    {name: "Astro-Cookie", description: "Consume with caution", id: "3"} ,
    {name: "L$D", description: "Rainbow glasses", id: "4"} ,
    {name: "Eye of Dolphin", description: "Pendant", id: "5"}
];

class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink exact to="/" activeClassName="selected"> Home </NavLink>
                <NavLink to="/products" activeClassName="selected"> Products </NavLink>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/products" render={() => <Products products={initialProducts} /> } />
                  <Route exact path="/product/:id" render={(props) => <Product {...props}products={initialProducts} /> } />
                  <Route path="/product/:id/edit" component={ProductEdit} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;