import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState("");

  const TaskText = (e) => {
    setTasks(e.target.value);
  }

  function addTask() {
    setTodos([...todos, tasks]);
    setTasks('')
  }

  function TaskEdit(index, e) {
    let arr = [...todos];
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        arr[i] = e.target.value;
      }
    }

    setTodos(arr)
  }

  function deleteTask(index) {
    let arr = [...todos];
    let arrTwo = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        continue
      }
      else {
        arrTwo.push(arr[i])
      }
    }
    setTodos(arrTwo)
  }

  return (
    <>
      <div>
        <div className='input-text'>
          <input value={tasks} onChange={(e) => TaskText(e)} />
          <button type='submit' onClick={addTask}>Add Task</button>
        </div>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index} className='Tasks-list'>
                <input value={todo} onChange={(e) => TaskEdit(index, e)} />
                <button type='submit' onClick={() => deleteTask(index)}>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App