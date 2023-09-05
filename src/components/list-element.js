

export default ({title, idx, isDone, deleteTask, doneTask}) => {

    return (
        <li style={{ backgroundColor: isDone ? 'red': '' }}>
            <span>{title}</span>
            { !isDone &&
                <button onClick={() => doneTask(idx) }>Done</button>
            }
            <button onClick={() => deleteTask(idx) }>Delete</button>
        </li>
    )
}