import { useState, useRef } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (intervalRef.current !== null) return;
        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resetTimer = () => {
        stopTimer();
        setSeconds(0);
    };

    return (
        <div className="app">
            <h1>Секундомер (useRef + setInterval)</h1>
            <p className="timer">Прошло секунд: {seconds}</p>
            <div className="buttons">
                <button onClick={startTimer}>Старт</button>
                <button onClick={stopTimer}>Стоп</button>
                <button onClick={resetTimer}>Сброс</button>
            </div>
        </div>
    );
}

export default App;