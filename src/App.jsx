import { AuthProvider } from './AuthContext';
import TopComponent from './UserProfile';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <div className="app">
                <h1>Главная страница</h1>
                <TopComponent />
            </div>
        </AuthProvider>
    );
}

export default App;