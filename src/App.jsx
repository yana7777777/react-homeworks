import './App.css';

let clickCount = 0;

function App() {
    function handleClick() {
        clickCount = clickCount + 1;
        console.log('Нажатий:', clickCount);
    }

    function handleChange(event) {
        console.log('Имя:', event.target.value);
    }

    function handleMouse() {
        console.log('Мышь наведена!');
    }

    return (
        <div className="card">
            <h1>Домашнее задание 5</h1>

            <button onClick={handleClick}>Нажми меня</button>
            <p>Количество нажатий смотрите в консоли</p>

            <hr />

            <input
                type="text"
                placeholder="Введите имя"
                onChange={handleChange}
            />
            <p>Смотрите имя в консоли</p>

            <hr />

            <div className="highlight" onMouseOver={handleMouse}>
                Наведи на меня
            </div>
        </div>
    );
}

export default App;