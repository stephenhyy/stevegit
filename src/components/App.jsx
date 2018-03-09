import React from 'react';
import About from './About';
import Faq from './Faq';
import Home from './Home';
import Todo from './Todo';
import { Router, Route, hashHistory} from 'react-router';
const routes=(
  <Route path="/" component={Home}>
    <Route path="/about" component={About}/>
    <Route path="/faq" component={Faq}/>
    <Route path="/todo" component={Todo}/>
  </Route>
);
export default class App extends React.Component{
  constructor(props){
      super(props)
  }
  render(){
      return (
        <div>
          <Router routes={routes} history={hashHistory}>
          </Router>
        </div>
      )
  }
}