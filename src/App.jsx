import { useState } from 'react';
import QuoteViewer from './QuoteViewer';
import './App.css';

function App() {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => {
        setVisible(prev => !prev);
    };

    return (
        <div className="app">
            <h1>Quote viewer</h1>
            <button onClick={toggleVisibility}>
                {visible ? 'Hide quotes' : 'Show quotes'}
            </button>
            {visible && <QuoteViewer />}
        </div>
    );
}

export default App;