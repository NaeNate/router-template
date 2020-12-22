import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import HomePage from '../components/HomePage'
import About from '../components/About'
import NavigationBar from '../components/NavigationBar'
import NotFound from '../components/NotFound'
import Footer from '../components/Footer'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={About}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />  
    </div>
  </BrowserRouter>
)

export default AppRouter