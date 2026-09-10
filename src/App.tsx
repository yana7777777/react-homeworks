import { useState, lazy, Suspense } from 'react';
import './App.css';

const UserList = lazy(() => import('./UserList'));

function App() {
    const [showUsers, setShowUsers] = useState(false);

    return (
        <div className="app">
            <h1>Домашнее задание: lazy loading</h1>
            <button onClick={() => setShowUsers(true)}>Показать пользователей</button>

            {showUsers && (
                <Suspense fallback={<p>Загрузка списка пользователей...</p>}>
                    <UserList />
                </Suspense>
            )}
        </div>
    );
}

export default App;