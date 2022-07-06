// 讓我們可以用React的東西
import React from 'react';
// 作用類似把render畫在白紙上
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
