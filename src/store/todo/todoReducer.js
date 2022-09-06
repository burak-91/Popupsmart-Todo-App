import { CREATE,UPDATE,DELETE,FETCH_ALL,COMPLETE } from "./actionTypes";

const INITIAL_STATE = {
    todos: []
}

export const todoReducer = (state=INITIAL_STATE,action) =>{
    const {type,payload} = action;
    
    switch (type) {
        case FETCH_ALL:
            return {
                ...state,
                todos: payload
            }
        case CREATE:
            return {
                ...state,
                todos: [payload, ...state.todos],
              };
        case DELETE:
            return {
                ...state,
                todos: [...state.todos].filter((todo) => todo.id !== payload),
              };
        case UPDATE:
            console.log(payload)
            return {
                ...state,
                todos: state.todos.map((todo) => {
                  if (todo.id !== payload.todoId) {
                    return todo;
                  }
        
                  return {
                    ...todo,
                    content: payload.content,
                  };
                }),
              };
            case COMPLETE:
                return{
                    ...state,
                    todos: state.todos.map(todo =>{
                        if(todo.id !== payload){
                            return todo
                        }
                        return{
                            ...todo,
                            isCompleted:todo.isCompleted
                        }
                    })
                }
        default:
            return state
    }

}