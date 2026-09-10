import { useReducer, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import type { Contact } from './types';
import './App.css';

interface State {
    contacts: Contact[];
}

type Action =
    | { type: 'add'; payload: { name: string; phone: string } }
    | { type: 'delete'; payload: number };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add':
            return {
                contacts: [
                    ...state.contacts,
                    {
                        id: Date.now(),
                        name: action.payload.name,
                        phone: action.payload.phone,
                    },
                ],
            };
        case 'delete':
            return {
                contacts: state.contacts.filter((c) => c.id !== action.payload),
            };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, { contacts: [] });
    const [search, setSearch] = useState('');

    const handleAdd = (name: string, phone: string) => {
        dispatch({ type: 'add', payload: { name, phone } });
    };

    const handleDelete = (id: number) => {
        dispatch({ type: 'delete', payload: id });
    };

    const filteredContacts = state.contacts.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="app">
            <h1>Контакты</h1>
            <ContactForm onAdd={handleAdd} />
            <SearchBar value={search} onChange={setSearch} />
            <ContactList contacts={filteredContacts} onDelete={handleDelete} />
        </div>
    );
}

export default App;