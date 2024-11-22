import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider defaultTheme={"system"} storageKey="vite-ui-theme">
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
