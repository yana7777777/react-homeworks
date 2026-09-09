import { useReducer, useState } from 'react';
import './App.css';

const initialUsers = [
    { id: 1, name: 'Иван', active: true },
    { id: 2, name: 'Мария', active: false },
    { id: 3, name: 'Алексей', active: true },
];

const initialState = {
    users: initialUsers,
    deletedUsers: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload
                        ? { ...user, active: !user.active }
                        : user
                ),
            };
        case 'delete':
            const userToDelete = state.users.find(u => u.id === action.payload);
            return {
                users: state.users.filter(u => u.id !== action.payload),
                deletedUsers: [...state.deletedUsers, userToDelete],
            };
        case 'restore':
            const userToRestore = state.deletedUsers.find(u => u.id === action.payload);
            return {
                users: [...state.users, userToRestore],
                deletedUsers: state.deletedUsers.filter(u => u.id !== action.payload),
            };
        case 'edit':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id
                        ? { ...user, name: action.payload.newName }
                        : user
                ),
            };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newNames, setNewNames] = useState({});

    const handleNameChange = (id, value) => {
        setNewNames(prev => ({ ...prev, [id]: value }));
    };

    const handleSave = (id) => {
        const newName = newNames[id];
        if (newName && newName.trim() !== '') {
            dispatch({ type: 'edit', payload: { id, newName: newName.trim() } });
        }
        // очищаем поле после сохранения
        setNewNames(prev => {
            const { [id]: _, ...rest } = prev;
            return rest;
        });
    };

    return (
        <div className="app">
            <h1>Список пользователей (useReducer)</h1>
            <ul>
                {state.users.map(user => (
                    <li key={user.id} style={{ backgroundColor: user.active ? '#d4edda' : '#e2e3e5' }}>
                        <div className="user-name-row">Имя: {user.name}</div>
                        <div className="edit-row">
                            <input
                                type="text"
                                placeholder="Новое имя"
                                value={newNames[user.id] || ''}
                                onChange={(e) => handleNameChange(user.id, e.target.value)}
                            />
                            <button onClick={() => handleSave(user.id)}>Сохранить</button>
                        </div>
                        <div className="actions-row">
                            <button onClick={() => dispatch({ type: 'toggle', payload: user.id })}>
                                {user.active ? 'Деактивировать' : 'Активировать'}
                            </button>
                            <button className="delete" onClick={() => dispatch({ type: 'delete', payload: user.id })}>
                                Удалить
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {state.deletedUsers.length > 0 && (
                <div className="deleted-section">
                    <h3>Удалённые пользователи</h3>
                    <ul>
                        {state.deletedUsers.map(user => (
                            <li key={user.id} style={{ backgroundColor: '#f8d7da' }}>
                                <span>Имя: {user.name}</span>
                                <button className="restore" onClick={() => dispatch({ type: 'restore', payload: user.id })}>
                                    Восстановить
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;