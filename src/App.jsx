import { useState } from 'react';
import './App.css';

function UserStatus({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h2>Добро пожаловать, пользователь!</h2>;
    }
    return <button>Войти</button>;
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function toggleLogin() {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div className="app">
            <h1>Домашнее задание 11</h1>
            <UserStatus isLoggedIn={isLoggedIn} />
            <button onClick={toggleLogin}>
                {isLoggedIn ? 'Выйти' : 'Войти (переключить)'}
            </button>
        </div>
    );
}

export default App;