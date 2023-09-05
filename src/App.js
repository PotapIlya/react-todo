import { useState } from "react";

import Header from './components/blocks/header';
import ListElement from './components/list-element';
import Form from './components/form';


export default () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (val) => setTasks(prevTasks => [ ...prevTasks, val]);
    const deleteTask = (idx) => setTasks(prevTasks => prevTasks.splice(idx));
    const doneTask = (idx) => {
        let prev =[...tasks]
        prev[idx].isDone = true
        setTasks(prev);
    };

    return (
        <>
            <Header/>
            <main>
                <Form addTask={addTask} />
                { !!tasks.length &&
                    <ul>
                        { tasks.map(({title, isDone}, idx) => {
                            return (
                                <ListElement
                                    key={idx}
                                    idx={idx}
                                    title={title}
                                    isDone={isDone}

                                    deleteTask={deleteTask}
                                    doneTask={doneTask}
                                />
                            )}
                        )}
                    </ul>
                }
            </main>
        </>
    );
}
