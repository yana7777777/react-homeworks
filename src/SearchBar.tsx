import { useEffect, useRef } from 'react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <input
            ref={inputRef}
            type="text"
            className="search-bar"
            placeholder="Поиск контакта"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;