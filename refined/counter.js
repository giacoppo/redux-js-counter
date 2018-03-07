// 4 Main Redux Methods
// createStore
// getState
// dispatch
// subscribe

// REDUCER
function counter(state, action) {
  // Check if state exists
  if (typeof state === 'undefined') {
    return { count: 0 }
  }
  var nextState = { // New state object
    count: state.count
  }
  switch (action.type) {
    case 'ADD': //Capitalized action names
      nextState.count = state.count + 1
      return nextState
      break;
    case 'MINUS':
      nextState.count = state.count - 1
      return nextState
      break;
    case 'RESET':
      nextState.count = 0
      return nextState
      break;
    default:
      return state
  }
}

// STORE
var store = Redux.createStore(counter);
var counterEl = document.getElementById('counter');

// CALLBACK FUNCTION FOR OUR STORE
function render() {
  var state = store.getState()
  counterEl.innerHTML = state.count.toString()
}

render() //To initialize state
store.subscribe(render) //Gets called anytime an action gets dispatched

// ACTIONS
document.getElementById(('add'))
  .addEventListener('click', function() {
    store.dispatch({ type: 'ADD' }); //Action set in capitals
  })

document.getElementById(('minus'))
  .addEventListener('click', function() {
    store.dispatch({ type: 'MINUS' }); //Action set in capitals
  })

document.getElementById(('reset'))
  .addEventListener('click', function() {
    store.dispatch({ type: 'RESET' }); //Action set in capitals
  })
