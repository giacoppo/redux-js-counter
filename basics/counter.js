// REDUCER
function counter(currentState, action) {
  var nextState = { //Create new object and return it
    count: currentState.count
  }
  switch (action.type) {
    case 'ADD':
      nextState.count = currentState.count + 1
      return nextState
      //console.log(action);
      break;
    case 'MINUS':
      nextState.count = currentState.count - 1
      return nextState
      break;
    case 'RESET':
      nextState.count = 0
      return nextState
      break;
    default:
      console.log('In Default');
      return currentState
  }
}

// STORE
var state = { count: 0 }
var store = Redux.createStore(counter, state) //Pass in Reducer and current initial state
// Grab counter html element by id
var counterEl = document.getElementById('counter')

console.log(store);

// SUBSCRIBE - React to changes in our state
// Purpose to Render new state to the UI
function render() { //Store subscribing to this function
  console.log('In Render');
  console.log(store.getState()); //Return state object
  var state = store.getState() //Grabs the object of state, initial count:0
  counterEl.innerHTML = state.count.toString();
}

store.subscribe(render) //listener, callback to action gets dispatched

// ACTIONS
document.getElementById('add') //listener
  .addEventListener('click', function() {
    store.dispatch({ type: 'ADD' }) //Dispatch action to our store
    //console.log({ type: 'ADD' });
  })

document.getElementById('minus')
  .addEventListener('click', function() {
    store.dispatch({ type: 'MINUS' })
  })

document.getElementById('reset')
  .addEventListener('click', function() {
    store.dispatch({ type: 'RESET' })
  })
