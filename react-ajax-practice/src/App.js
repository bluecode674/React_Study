import { useEffect, useState } from "react";

function Nav(props){

  var [liststate, setlist] = useState([]);
  useEffect(function(){  
    fetch('list.json').then(function(result){
      return result.json();
    }).then(function(json){
        setlist(json); //useEffect안에 useState를 같이 쓸경우 무한 루프에 빠질수 있음
      });
  },[]) //이렇게 하면 어는 정도 해결


  var listTag = [];
  for(var i = 0; i<liststate.length; i++){
    var li = liststate[i];
    listTag.push(<li key={li.id}><a href={li.title} data-title={li.title} onClick={function(e){
      e.preventDefault();
      props.onClick(e.target.dataset.title);
    }}>{li.title}</a></li>);
  }

  return(
    <nav>
      {listTag}
    </nav>
  );
}

function Article(props){
  return(
    <article>
      <h2>{props.title}</h2>
      {props.desc}
    </article>
  );
}

function App() {
  var [articletitle = "Web", settitle] = useState();
  var [articledesc = "welcome", setdesc] = useState();
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav onClick={function(title){
        fetch(title+".json").then(function(result){
          return result.json();
        }).then(function(json){
          settitle(json.title);
          setdesc(json.desc);
        });
      }}></Nav>
      <Article title={articletitle} desc={articledesc}></Article>
    </div>
  );
}

export default App;
