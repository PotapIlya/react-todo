import { useState } from "react";


export default ({addTask}) => {
    const [task, setTask] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        addTask({ title: task, isDone: false });
        setTask('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                onChange={(e) => setTask(e.target.value)}
                value={task}
                required
                type="text"
                name="task"
            />
            <button type="submit">Create</button>
        </form>
    );
}
