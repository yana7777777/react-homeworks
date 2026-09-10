import { useState, useMemo } from 'react';
import './App.css';

function App() {
    const [users] = useState([
        { id: 1, name: 'Алексей' },
        { id: 2, name: 'Мария' },
        { id: 3, name: 'Иван' },
        { id: 4, name: 'Ольга' },
        { id: 5, name: 'Дмитрий' },
    ]);
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(0);

    const filteredUsers = useMemo(() => {
        console.log('Filtering users...');
        return users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, users]);

    return (
        <div className="app">
            <h1>Поиск пользователей (useMemo)</h1>
            <input
                type="text"
                placeholder="Введите имя"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={() => setCount(count + 1)}>
                Лишний ререндер: {count}
            </button>
        </div>
    );
}

export default App;