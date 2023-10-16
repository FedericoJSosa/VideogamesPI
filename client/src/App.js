import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

function App() {

  const [videogames, setVideogames]= useState([]);

  const onSearch= ()=>{
    axios("http://localhost:3001/videogames")
    .then((response)=>{
      const data =response.data.data
        if(data){
          const allData= data.slice(0,100);
          setVideogames(allData);
          }
        }
      )
     }
    
      
  return (
    <div className="App">
      <SearchBar />
      <Router>
          <Route exact path="/" render={() => <Cards videogames={videogames} onSearch={onSearch} />} /> 
          <Route exact path="/form" component={Form} />
          <Route exact path="/detail/:id" component={Detail} />   
      </Router>
    </div>
  );
}

export default App;
