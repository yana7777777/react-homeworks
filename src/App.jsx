import { useLayoutEffect, useRef, useState } from 'react';
import './App.css';

function App() {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        function updateSize() {
            if (boxRef.current) {
                const rect = boxRef.current.getBoundingClientRect();
                setSize({
                    width: Math.round(rect.width),
                    height: Math.round(rect.height)
                });
                console.log('Размеры:', rect.width, rect.height);
            }
        }

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div className="card">
            <h1>ResizableBox</h1>
            <div
                ref={boxRef}
                style={{
                    width: '80%',
                    maxWidth: '600px',
                    height: '250px',
                    minWidth: '200px',
                    minHeight: '100px',
                    resize: 'both',
                    overflow: 'auto',
                    backgroundColor: '#3498db',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    margin: '0 auto',
                    padding: '10px',
                    boxSizing: 'border-box',
                    border: '2px solid #2980b9'
                }}
            >
                <span>Ширина: {size.width}px, Высота: {size.height}px</span>
            </div>
            <p>Потяните за правый нижний угол блока.</p>
        </div>
    );
}

export default App;