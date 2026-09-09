import { useState } from 'react';
import './App.css';

let clickCount = 0;

function App() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    function addTask() {
        if (text === '') return;
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function toggleTask(id) {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(newTasks);
    }

    function deleteTask(id) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    let completedCount = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
            completedCount++;
        }
    }

    return (
        <div className="card">
            <h1>Список задач</h1>

            <input
                type="text"
                placeholder="Введите задачу..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTask}>Добавить</button>

            <p>Выполнено {completedCount} из {tasks.length}</p>

            {tasks.length === 0 && <p>Нет задач</p>}

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;