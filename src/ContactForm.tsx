import { useState } from 'react';

interface ContactFormProps {
    onAdd: (name: string, phone: string) => void;
}

function ContactForm({ onAdd }: ContactFormProps) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() === '' || phone.trim() === '') {
            setError('Заполните имя и телефон');
            return;
        }
        onAdd(name.trim(), phone.trim());
        setName('');
        setPhone('');
        setError('');
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Добавить контакт</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default ContactForm;