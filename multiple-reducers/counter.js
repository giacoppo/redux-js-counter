// 4 Main Redux Methods
// createStore
// getState
// dispatch
// subscribe

// COUNTER REDUCER
function counterReducer(state, action) {
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

// TODOS REDUCER
function todosReducer(state, action) {
  if (typeof state === 'undefined') {
    return { todos: [] }
  }

  var nextState = Object.assign({}, state);

  switch (action.type) {
    case 'NEW':
      nextState.todos.push(action.payload);
      return nextState;
      break;
    case 'DELETE':
      nextState.todos.pop();
      return nextState;
      break;
    case 'DELETE_ALL':
      nextState.todos = [];
      return nextState;
      break;
    default:
      return state;
  }
}

// COUNTER STORE
var store = Redux.createStore(Redux.combineReducers({ counterReducer: counterReducer, todosReducer: todosReducer }));
//var store = Redux.createStore(counterReducer);
var counterEl = document.getElementById('counter');
// TODOS STORE
var todoInput = document.getElementById('todos');
var todoList = document.getElementById('todoList');

// CALLBACK FUNCTION FOR OUR STORE
function render() {
  var state = store.getState()
  counterEl.innerHTML = state.counterReducer.count.toString()
  renderList(state);
}

function renderList(state) {
  todoList.innerHTML = '';
  for (var i = 0; i < state.todosReducer.todos.length; i++) {
    var li = document.createElement('li');
    var todo = state.todosReducer.todos[i];
    li.innerHTML = todo.toString();
    todoList.appendChild(li);
  }
}

render() //To initialize state
store.subscribe(render) //Gets called anytime an action gets dispatched

// COUNTER ACTIONS
document.getElementById('add')
  .addEventListener('click', function() {
    store.dispatch({ type: 'ADD' }); //Action set in capitals
  })

document.getElementById('minus')
  .addEventListener('click', function() {
    store.dispatch({ type: 'MINUS' }); //Action set in capitals
  })

document.getElementById('reset')
  .addEventListener('click', function() {
    store.dispatch({ type: 'RESET' }); //Action set in capitals
  })

// TODOS ACTIONS
document.getElementById('new')
  .addEventListener('click', function() {
    store.dispatch({ type: 'NEW', payload: todoInput.value })
  })

document.getElementById('delete')
  .addEventListener('click', function() {
    store.dispatch({ type: 'DELETE' })
  })

document.getElementById('delete_all')
  .addEventListener('click', function() {
    store.dispatch({ type: 'DELETE_ALL' })
  })
