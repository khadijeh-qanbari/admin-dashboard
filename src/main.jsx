import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import {AppProvider} from "./contexts/app/app-context.jsx"; // Import your CSS file here


createRoot(document.getElementById('root')).render(
    <AppProvider>
        <App/>
    </AppProvider>
)
