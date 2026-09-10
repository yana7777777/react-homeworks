import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('Error caught:', error.message);
    }

    handleReset = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-block">
                    <p>Не удалось загрузить компонент.</p>
                    <button onClick={this.handleReset}>Попробовать снова</button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;