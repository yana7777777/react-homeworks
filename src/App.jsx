import { useState, useEffect } from 'react';
import './App.css';

// Компонент, который загружает и отображает посты
function DataFetcher({ userId }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Монтирование компонента');
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.slice(0, 5));
                setLoading(false);
            });

        return () => {
            console.log('Размонтирование компонента');
        };
    }, [userId]);

    useEffect(() => {
        console.log('Обновление компонента (зависимость userId)');
    }, [userId]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    return (
        <div>
            <h3>Посты пользователя {userId}</h3>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Контейнер с кнопкой показать/скрыть
function DataFetcherContainer() {
    const [visible, setVisible] = useState(true);
    const [userId, setUserId] = useState(1);

    return (
        <div className="card">
            <h1>DataFetcher</h1>
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Скрыть' : 'Показать'}
            </button>

            {visible && (
                <>
                    <label>
                        ID пользователя:
                        <select value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </label>
                    <DataFetcher userId={userId} />
                </>
            )}
        </div>
    );
}

export default DataFetcherContainer;