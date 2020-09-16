import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from './header';
import Cards from "./components/Cards";
import {BrowserRouter,Route} from "react-router-dom";
import Resume from "./components/Resume";

{/*function App() {
  
  const[state,setState]=useState({name:"suppi",role:"student"})
  let  changeState=()=>{
    setState({
      name:"suppi",
      role:"teacher"
    })
  }
  let prevState=()=>{
    setState({
      name:"suppi",
      role:"student"
    })
  }*/}
  function App(){
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/" component={Cards} />
      <Route exact path="/resume" component={Resume} />    
      </BrowserRouter>
      

      {/*<Cards />*/}
      {/*<h2 onMouseOver={changeState} onMouseLeave={prevState}>{state.name} is a {state.role}</h2>
      <StateComp name="suppi">
      </StateComp>*/}

      {/*<h1>Hello APSSDC</h1>
      <h2> Welcome to Reactjs </h2>
      
      <Header name="suppi" >
        <p>learning html5</p>
        <h2>hello</h2>
      </Header>
      
      <Header name="sai" >
        <p>learning bootstarp</p>
      </Header>
      
      <Header name="satya" >
        <p>learning js</p>
      </Header>
      
      <Header name="jaya" >
        <p>learning css</p>
      </Header>*/}
   {/* <StateComp name="suppi">
      <p>learning html5</p>
      <p>learning java</p>
    </StateComp>
    
    <StateComp name="pavi">
      <p>learning reactjs</p>
      <p>learning python</p>
    </StateComp>
    
    <StateComp name="satya">
      <p>learning js</p>
      <p>learning c</p>
    </StateComp>
    
    <StateComp name="sai">
      <p>learning css</p>
      <p>learning c++</p>
    </StateComp>
    
    <StateComp name="jaya">
      <p>learning bootstarp</p>
      <p>learning mysql</p>
    </StateComp>*/}

      
    
    </div>
  );
}


export default App
