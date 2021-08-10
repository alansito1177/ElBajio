import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./components/navbar";
import Home from "./components/home";
import Menu from "./components/menu";
import Delivery from './components/delivery';
import Contact from './components/contactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div class="bg-dark text-white">

        <Switch>
        <Route exact path="/menu">
          <Menu />
          </Route>
          <Route exact path="/contact">
          <Contact />
          </Route>
          <Route exact path="/delivery">
          <Delivery />
          </Route>
          <Route exact path="/">
          <Home />
          </Route>
        
        </Switch>
        </div>
      </Router>
      </div>
    
  );
}

export default App;
