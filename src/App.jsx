import { useState, useCallback } from 'react';
import TodoItem from './TodoItem';
import './App.css';

function App() {
    // Начальный список задач
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Изучить React', completed: false },
        { id: 2, text: 'Выучить useCallback', completed: false },
    ]);
    const [input, setInput] = useState('');

    // Добавление новой задачи
    const addTask = () => {
        if (input.trim() === '') return;
        const newTask = { id: Date.now(), text: input.trim(), completed: false };
        setTasks([...tasks, newTask]);
        setInput('');
    };

    // Переключение статуса задачи (обёрнуто в useCallback)
    const handleToggle = useCallback((id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }, []); // зависимости пусты, т.к. используем функциональное обновление

    // Удаление задачи (обёрнуто в useCallback)
    const handleDelete = useCallback((id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    return (
        <div className="app">
            <h1>Список задач (useCallback)</h1>

            {/* Форма добавления */}
            <div className="add-form">
                <input
                    type="text"
                    placeholder="Новая задача"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTask}>Добавить</button>
            </div>

            {/* Список задач */}
            <ul>
                {tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;