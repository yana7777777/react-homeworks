import './App.css';

function App() {
    const name = 'Яна';

    return (
        <div className="card">
            <h1>Привет, меня зовут {name}</h1>
            <h2>Моя профессия: начинающий разработчик</h2>
            <p>Я учусь создавать интерфейсы на React. </p>
            <p>"Можно завоевать весь мир и тогда любое место станет твоим домом."</p>
        </div>
    );
}

export default App;