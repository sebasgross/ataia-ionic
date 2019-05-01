import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './components/Index'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductAll';


export default ()=> <Switch>
<Route exact path="/" component={Index} />
<Route path="/product/create" component={ProductForm} />
<Route path="/product/all" component={ProductList} />



 </Switch>
