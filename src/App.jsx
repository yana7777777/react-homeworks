import { useState } from 'react';
import './App.css';

function FruitList({ fruits, onDelete }) {
    return (
        <ul>
            {fruits.map((fruit) => (
                <li key={fruit}>
                    {fruit}
                    <button onClick={() => onDelete(fruit)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
}

function App() {
    const [fruits, setFruits] = useState(['Яблоко', 'Банан', 'Апельсин', 'Киви', 'Виноград']);
    const [newFruit, setNewFruit] = useState('');

    function addFruit() {
        if (newFruit.trim() === '') return;
        setFruits([...fruits, newFruit]);
        setNewFruit('');
    }

    function deleteFruit(fruitName) {
        setFruits(fruits.filter(f => f !== fruitName));
    }

    return (
        <div className="app">
            <h1>Домашнее задание 12</h1>
            <div>
                <input
                    type="text"
                    value={newFruit}
                    onChange={(e) => setNewFruit(e.target.value)}
                    placeholder="Название фрукта"
                />
                <button onClick={addFruit}>Добавить</button>
            </div>
            <FruitList fruits={fruits} onDelete={deleteFruit} />
        </div>
    );
}

export default App;