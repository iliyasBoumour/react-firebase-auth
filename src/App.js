import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Login from "./Pages/login/Login";
import { Auth } from "../src/auth/Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Auth>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </Auth>
  );
}

export default App;
