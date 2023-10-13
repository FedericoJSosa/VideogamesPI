import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Router>
          <Route exact path="/" component={Cards} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/detail/:id" component={Detail} />   
      </Router>
    </div>
  );
}

export default App;
