import React from 'react';
import type { Contact } from './types';

interface ContactListProps {
    contacts: Contact[];
    onDelete: (id: number) => void;
}

const ContactList = React.memo(function ContactList({ contacts, onDelete }: ContactListProps) {
    if (contacts.length === 0) {
        return <p className="empty">Контактов нет</p>;
    }

    return (
        <ul className="contact-list">
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <span>{contact.name} — {contact.phone}</span>
                    <button onClick={() => onDelete(contact.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
});

export default ContactList;