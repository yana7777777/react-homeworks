import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UserCard from './UserCard';

function Home() {
    return <h2>Главная страница</h2>;
}

function About() {
    return <h2>О нас</h2>;
}

function Contacts() {
    return <h2>Контакты</h2>;
}

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <h1>Домашнее задание 14</h1>
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/about">О нас</Link>
                    <Link to="/contacts">Контакты</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;