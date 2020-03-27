import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Header from '../header/header';

const Home = lazy(() => import('../../sections/home/home'));
const dashboard = lazy(() => import('../../sections/dashboard/dashboard.js'));

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/dashboard" component={dashboard}/>
				</Switch>
			</Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
