export default function createStore(reducer) {
  
  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  function getState(){
    return state
  }

  dispatch({type: 'beouf'})

  return {
    dispatch, 
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
