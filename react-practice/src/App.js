import './App.css';
import React, {Component} from 'react';
import Subject from './component/Subject'
import TOC from './component/TOC'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'web', sub:'hello world'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is'},
        {id:2, title:'CSS', desc:'CSS is'},
        {id:3, title:'JS', desc:'JS is'}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(e){
            alert("hi")
          }.bind(this)}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
      </div>
    );
  }
}

export default App;
