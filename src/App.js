import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/user/new">New User</Link>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`} data-testid={`user-${id}`}>
                User{id}
              </Link>
            </div>
          ))}
      </nav>
      
      <Switch>
        <Route exact path="/">
          <h1>Welcome to my App!</h1>
        </Route>
        <Route exact path="/user/new">
          <h1>Unable to create a new user</h1>
        </Route>
        <Route exact path="/user/:userId" component={UserProfile} />
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;