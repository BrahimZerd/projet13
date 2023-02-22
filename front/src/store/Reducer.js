let id = 2;
const initialState = [{}]


const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export function TodoReducer( state= initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return  [...state, {id: ++id, completed: false, ...action.payload}]
    default: 
    return state
  }
}

