import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import LandingPage from './views/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path= "/home">
            <div>
              <SearchBar />
              <Route exact path="/home" component={Cards} /> 
              <Route exact path="/home/form" component={Form} />
              <Route exact path="/home/detail/:id" component={Detail} />   
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
