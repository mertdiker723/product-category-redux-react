import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './components/page/Home';
import Product from './components/list/Product';
import Category from './components/list/Category';
import NotFound from './components/page/NotFound';
import ProductAdd from './components/add/ProductAdd';
import CategoryAdd from './components/add/CategoryAdd';

class Approutes extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <App />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/product" render={() => <Product route={"/product/add"}/>}/>
                        <Route exact path="/category" render={() => <Category route={"/category/add"}/>}/>
                        <Route exact path="/product/add" component={ProductAdd}/>
                        <Route exact path="/category/add" component={CategoryAdd}/>
                        <Route exact component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}


export default Approutes;