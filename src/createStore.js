import countReducer from "./reducers/countReducer";
import candyReducer from "./reducers/candyReducer";

export default function createStore(reducer) {
  // add your code here
  let state

  function dispatch(action){
      state = reducer(state, action)
    
    console.log("state after", state)
    render()
  }
  
  function getState() {
    return state
  }

  dispatch({ type: "@@Init"})

  return {dispatch, getState}
  
}

function render() {
  // const container = document.getElementById('container')
}

// let store = createStore(candyReducer)
// // console.log(store.dispatch({type: "@@INIT"}))
// store.dispatch({type: "@@INIT"})

// let store2 = createStore(countReducer)
// store.dispatch({type: "@@INIT"})