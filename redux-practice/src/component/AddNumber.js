import { useState } from "react";
import store from "../store";

export default function AddNumber(props){
    var [size = 1, setsize] = useState();
    return(
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={function(){
            store.dispatch({type:"INCREMENT", size:size});
        }}></input>
        <input type="text" value={size} onChange={function(e){
            setsize(Number(e.target.value));
        }}></input>
      </div>
    );
  }