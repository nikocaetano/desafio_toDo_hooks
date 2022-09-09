import React, { useState } from "react";

function Main() {
    const [task, setTask] = useState("")
    const [List, setList] = useState([])
    console.log(task)

    const ToDo = { ToDo: task, id: Date.now() }

    const Add = (e) => {
        e.preventDefault()
        setList([...List, ToDo])
    }

    return (
        <section>
            <h1>toDo Hooks</h1>
            <form /*onSubmit={(e) => { e.preventDefault(); setList([...List, task])}}*/>
                <input onChange={(e) => { setTask(e.target.value) }} value={task} type="text" />
                <button type="submit">Send</button>
                <button>Delete</button>
            </form>
            {List.map((item, index) => (
                <div key={index}>
                    <ul>
                        <li>{item}</li>
                    </ul>
                    <input type="checkbox" />
                    <button onClick={(id) => { setList(List.filter(item => item.id !== id)) }}>X</button>
                </div>
            ))}
        </section>
    )
}

export default Main
