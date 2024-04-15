import { useState } from "react"
import Form from "./Form"
export default function Todo() {
    const [todoArr, setTodoArr] = useState([]);

    function handleDel(id) {
        let filterArr = todoArr.filter((el) => el.id != id);
        setTodoArr(filterArr)
    }

    function handleMarkAsDone(id) {
        let newArr = todoArr.map((el) => {
            if (el.id === id) {
                el.isDone = true;
            };
            return el
        });
        setTodoArr(newArr)
    }

    return (
        <>
            <h2>Todo List</h2>
            <Form setTodoArr={setTodoArr} todoArr={todoArr} />
            <ul>
                {todoArr.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <span style={{ textDecoration: todo.isDone && "line-through" }}>{todo.task.toUpperCase()}</span>&nbsp;&nbsp;&nbsp;
                            <button onClick={() => handleDel(todo.id)}>Del Todo</button> &nbsp;&nbsp;&nbsp;
                            <button onClick={() => handleMarkAsDone(todo.id)}>Mark as Done</button>
                            <br /><br />
                        </div>
                    )
                })}
            </ul>
        </>
    )
}