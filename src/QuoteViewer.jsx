import React from 'react';

class QuoteViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            quotes: [
                'Better late than never.',
                'Knowledge is power.',
                'Time heals all wounds.',
                'Practice makes perfect.',
                'Where there is a will, there is a way.',
            ],
        };
    }

    componentDidMount() {
        console.log('QuoteViewer mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('QuoteViewer updated. Quote index:', this.state.currentIndex);
    }

    componentWillUnmount() {
        console.log('QuoteViewer unmounted');
    }

    nextQuote = () => {
        let newIndex = Math.floor(Math.random() * this.state.quotes.length);
        while (newIndex === this.state.currentIndex) {
            newIndex = Math.floor(Math.random() * this.state.quotes.length);
        }
        this.setState({ currentIndex: newIndex });
    };

    render() {
        return (
            <div className="quote-viewer">
                <p className="quote">{this.state.quotes[this.state.currentIndex]}</p>
                <button onClick={this.nextQuote}>Next quote</button>
            </div>
        );
    }
}

export default QuoteViewer;