import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import UserStore from "./store/UserStore";
import FIlmStore from "./store/FIlmStore";
import NewsStore from "./store/NewsStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        film: new FIlmStore(),
        news: new NewsStore()
    }}>
        <App />
    </Context.Provider>
);

