import React from 'react';
import logo from './logo.svg';
import './index.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import DashboardPage from './pages/dashboardPage';
import PostsPage from './pages/postsPage';
import SinglePostPage from './pages/singlePostPage';

function App() {
  return (
    <Router>
      <Route/>
      <Switch>
        <Route exact path="/" component={DashboardPage}/>
        <Route exact path="/posts" component={PostsPage}/>
        <Route exact path="/posts/:id" component={SinglePostPage}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
