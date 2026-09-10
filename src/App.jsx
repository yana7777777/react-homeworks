import { useCounter } from './useCounter';
import './App.css';

function App() {
    const { count, increment, decrement, reset } = useCounter(0, 1);

    return (
        <div className="app">
            <h1>Домашнее задание: useCounter</h1>
            <p className="value">Текущее значение: {count}</p>
            <div className="buttons">
                <button onClick={increment}>Увеличить</button>
                <button onClick={decrement}>Уменьшить</button>
                <button onClick={reset}>Сбросить</button>
            </div>
        </div>
    );
}

export default App;