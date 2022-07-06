import React from 'react';
import { useState } from 'react';
import Edit from './components/Edit';
import List from './components/List';
import './index.css';

const Home = () => {

    const [date, setDate] = useState([]);

    return (
        <div className="app">
            {/* 改變狀態所以setDate放Edit */}
            <Edit add={setDate} />
            {/* 值的是從List裡面生出 所以date放List */}
            <List listDate={date} />
        </div>
    );
};

export default Home;
