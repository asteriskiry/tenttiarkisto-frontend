import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeView from './views/HomeView.js';
import LoginView from './views/LoginView.js';
import AddView from './views/AddView.js';
import CourseView from './views/CourseView.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/add" component={AddView} />
            <Route path="/course/:id" component={CourseView} />
          <Route path="/" component={HomeView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
