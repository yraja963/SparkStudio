// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Search from './searchapi';
import Gallery from"./gallery"
import {Switch,Route} from "react-router-dom"

function App() {
	return (<Switch>
    <Route exact path="/"><Search /></Route>
    <Route exact path="/search"><Gallery /></Route>
    
    </Switch>
  );
}

export default App;
// 
