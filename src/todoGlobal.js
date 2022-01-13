import { useStore, actions } from "./store";
import { useRef } from "react";
import { setTodoInput } from "./store/action";
function ToDo() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;
    const inputRef = useRef();
    const handleSubmit = () => {
        dispatch(actions.addToDo(todoInput))
        dispatch(setTodoInput(''))
        inputRef.current.focus()
    }
    const handleDelete = (e) => {
        dispatch(actions.deleteToDo(e))
    }
    console.log(todos);
    return (
        <>
            <input ref={inputRef} value={todoInput} placeholder="Enter todo..."
                onChange={e => { dispatch(actions.setTodoInput(e.target.value)) }} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item} <span onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }}>X</span></li>

                ))}
            </ul>
        </>
    )
}
export default ToDo