import './App.css';

function ButtonWithCallback({ onButtonClick }) {
    return (
        <button onClick={() => onButtonClick('Кнопка была нажата!')}>
            Нажми меня
        </button>
    );
}

function App() {
    function handleClick(message) {
        console.log(message);
    }

    return (
        <div className="app">
            <h1>Домашнее задание 10</h1>
            <ButtonWithCallback onButtonClick={handleClick} />
        </div>
    );
}

export default App;