import { useState } from 'react';
import './App.css';

function UserCard({ name, age, color }) {
    console.log('Реендер UserCard');
    return (
        <div className="card" style={{ backgroundColor: color, borderColor: color }}>
            <h2>{name}</h2>
            <p>Возраст: {age}</p>
        </div>
    );
}

function App() {
    const [name] = useState('Анна');
    const [age, setAge] = useState(25);
    const [color, setColor] = useState('#3498db');

    function increaseAge() {
        setAge(age + 1);
    }

    function changeColor() {
        setColor(color === '#3498db' ? '#e74c3c' : '#3498db');
    }

    return (
        <div className="app">
            <h1>Домашнее задание 9</h1>
            <UserCard name={name} age={age} color={color} />
            <button onClick={increaseAge}>Изменить возраст</button>
            <button onClick={changeColor}>Изменить цвет</button>
        </div>
    );
}

export default DataFetcherContainer;