
import React, { Component } from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import { IonApp } from '@ionic/react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Home from './Components/Home'
import ProductAll from './Components/ProductAll'
import ProductForm from './Components/ProductForm';

class App extends Component {
	render() {
		return (
      <div>

				<Router>
          <nav className="navbar">
              <Link to="/create">
              <span>
              Make A New Product
              </span>
              </Link>

              <Link to="/">
              <span>
              Look At All Products
              </span>
              </Link>
          </nav>
					<Switch>
						<Route exact path="/" component={ProductAll} />
            <Route path="/create" component={ProductForm} />
					</Switch>
				</Router>

      </div>
		)
	}
}

export default App