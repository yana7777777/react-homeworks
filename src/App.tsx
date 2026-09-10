import ArticlePreview from './ArticlePreview';
import './App.css';

function App() {
    // @ts-ignore
    return (
        <div className="app">
            <h1>Домашнее задание: Типизация Props</h1>
            <ArticlePreview
                title="Введение в React"
                author="Алексей Смирнов"
                commentsCount={12}
                publishedAt="10.08.2025"
            />
            <ArticlePreview
                title="React + TypeScript: с чего начать?"
                author="Ольга Иванова"
                commentsCount={8}
                publishedAt="08.08.2025"
            />
        </div>
    );
}

export default App;