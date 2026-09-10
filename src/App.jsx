import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import Profile from './Profile';
import Contacts from './Contacts';
import './App.css';

function App() {
    const [tab, setTab] = useState('home');

    const renderTab = () => {
        if (tab === 'home') return <Home />;
        if (tab === 'profile') return <Profile />;
        if (tab === 'contacts') return <Contacts />;
    };

    return (
        <div className="app">
            <h1>Навигация по вкладкам с ErrorBoundary</h1>
            <div className="tabs">
                <button onClick={() => setTab('home')}>Главная</button>
                <button onClick={() => setTab('profile')}>Профиль</button>
                <button onClick={() => setTab('contacts')}>Контакты</button>
            </div>
            <div className="content">
                <ErrorBoundary key={tab}>
                    {renderTab()}
                </ErrorBoundary>
            </div>
        </div>
    );
}

export default App;