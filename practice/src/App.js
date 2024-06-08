import './App.css';
import React, {Component, useState, useEffect} from 'react';

var funStyle = 'color:blue';
var funId = 0;

function FuncComp(props){
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumder = numberState[1];

  var dateState = useState((new Date()).toString());
  var _date = dateState[0];
  var setDate = dateState[1];

  useEffect(function(){
    console.log('%cfunc => useEffect'+(++funId),funStyle);
    document.title = number + ":" + _date;
  })
  
  console.log('%cfunc => render' +(++funId), funStyle);
  return(
    <div className='container'>
      <h2>function style Component</h2>
      <p>Numder : {number}</p>
      <p>date : {_date}</p>
      <input type="button" value="random" onClick={
        function(){
          setNumder(Math.random()); 
        }
      }></input>
      <input type='button' value="date" onClick={
        function(){
          setDate((new Date()).toString());
        }
      }></input>
    </div>
  );
}

var classStyle = "color:red"

class ClassComp extends Component{
  state = {
    number:this.props.initNumber,
    date: (new Date()).toString(),
  }
  componentWillUnmount(){
    console.log("%cclass => comomnetWillUnmount", classStyle);
  }
  componentDidMount(){
    console.log("%cclass => componentDidMount", classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("%cclass => shouldComponentUpdate", classStyle);
  }
  componentWillUpdate(nextProps, nextState){
    console.log("%cclass => componentWillUpdate", classStyle);
  }
  componentDidUpdate(nextProps, nextState){
    console.log("%cclass => componentDidUpdate", classStyle);
  }
  render(){
    console.log("%cclass => render", classStyle);
    return(
      <div className='container'>
        <h2>function style Component</h2>
        <p>Numder : {this.state.number}</p>
        <p>date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()});
          }.bind(this)
        }></input>
        <input type='button' value="date" onClick={
          function(){
            this.setState({date: (new Date()).toString()});
          }.bind(this)
        }></input>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}


export default App;
