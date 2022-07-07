import React from 'react';
import { useState } from 'react';
import Edit from './components/Edit';
import List from './components/List';
import './index.css';

const Home = () => {

    const [data, setData] = useState([]);

    return (
        <div className="app">
            {/* 改變狀態所以setData放Edit */}
            <Edit add={setData} />
            {/* 值的是從List裡面生出 所以date放List */}
            <List listData={data} />
        </div>
    );
};

export default Home;
