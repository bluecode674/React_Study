import {createStore} from 'redux';

const initialState = {
    number:0
}

export default createStore(function(state = initialState, action){
    if(state === undefined){
        return {number:0};
    }
    if(action.type === "INCREMENT"){
        return {...state, number:state.number+action.size};
    }
    return state;
})