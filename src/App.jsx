import { useState, useCallback } from 'react';
import TodoItem from './TodoItem';
import './App.css';
import UserCard from './UserCard';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Walk', completed: false },
        { id: 2, text: 'Go shopping', completed: false },
        { id: 3, text: 'Write code', completed: false },
    ]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() === '') return;
        const newTask = { id: Date.now(), text: input.trim(), completed: false };
        setTasks([...tasks, newTask]);
        setInput('');
    };

    const toggleTask = useCallback((id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }, []);

    const deleteTask = useCallback((id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    return (
        <div className="app">
            <h1>Todo list (React.memo)</h1>
            <div className="add-form">
                <input
                    type="text"
                    placeholder="New task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;