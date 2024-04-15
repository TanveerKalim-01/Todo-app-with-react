import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Form({ todoArr, setTodoArr }) {
    const [task, setTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (task != "") {
            setTodoArr([...todoArr, { id: uuidv4(), task: task, isDone: false }]);
            setTask("")
        }

    }

    return (
        <form onSubmit={handleSubmit} action="/">
            <input value={task} type="text" onChange={(e) => setTask(e.target.value)} /> <br /><br />
            <button>Add Todo</button>
            <hr />
        </form>
    )
}