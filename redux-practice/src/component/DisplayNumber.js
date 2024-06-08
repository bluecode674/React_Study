import { useState } from "react";
import store from "../store";

export default function DisplayNumber(){
    var [number = store.getState().number, setnumber] = useState();
    store.subscribe(function(){
        setnumber(store.getState().number);
    });
    return(
      <div>
        <h1>DisplayNumber</h1>
        <input type="text" value={number} readOnly></input>
      </div>
    );
  }