import './App.css';
import UserCard from './UserCard';

function App() {
    const users = [
        { name: 'Анна', age: 25, email: 'anna@example.com' },
        { name: 'Иван', age: 30, email: 'ivan@example.com' },
    ];

    return (
        <div className="app">
            <h1>Список пользователей</h1>
            {users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </div>
    );
}

export default App;