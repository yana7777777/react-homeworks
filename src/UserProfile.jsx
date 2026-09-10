import { useAuth } from './AuthContext';
import { useState } from 'react';

function UserPanel() {
    const { user, login, logout } = useAuth();
    const [name, setName] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (name.trim()) login(name.trim());
    };

    return (
        <div className="user-panel">
            <h3>Панель пользователя</h3>
            {user ? (
                <>
                    <p>Привет, {user}!</p>
                    <button onClick={logout}>Выйти</button>
                </>
            ) : (
                <form onSubmit={handleLogin} className="login-form">
                    <input
                        type="text"
                        placeholder="Введите имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Войти</button>
                </form>
            )}
        </div>
    );
}

// Вложенные компоненты (просто передают дальше)
function DeepComponent() {
    return <UserPanel />;
}

function MiddleComponent() {
    return <DeepComponent />;
}

function TopComponent() {
    return <MiddleComponent />;
}

export default TopComponent;