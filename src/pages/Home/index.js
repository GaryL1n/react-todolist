import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { API_GET_DATA } from '../../global/constants';
import Edit from './components/Edit';
import List from './components/List';
import './index.css';

// 寫Promise類別的時候可以寫這種function
async function fetchData(setData) {
    const res = await fetch(API_GET_DATA);
    const { data } = await res.json();
    // 把後端的值塞進狀態裡面
    setData(data);
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ data }),
    });
}

const Home = () => {
    const [data, setData] = useState([]);
    // 主要是避免改變資料庫裏面的狀態(db.json檔)
    const submittingStatus = useRef(false);

    // 只要data有變動useEffect就去執行一次
    // useEffect(()=>{

    // },[data]) // 放空陣列的話就只有一開始渲染時會執行一次

    // 該useEffect是data變動後把API裡面的值去做更新
    useEffect(() => {
        // 如果不是在送資料的狀態我就直接return掉這個useEffect
        //  承上述,如果不是true(看第28行有設定)就不執行該useEffect
        if (!submittingStatus.current) {
            return;
        }
        // 新增或刪除完後再把submittingStatus.current改回false(新增或刪除時有下放submittingStatus把current改成true讓該useEffect能執行)
        fetchSetData(data).then((data) => (submittingStatus.current = false));
    }, [data]);

    // 後端拿資料渲染的方法
    useEffect(() => {
        fetchData(setData);
    }, []);

    return (
        <div className="app">
            {/* 改變狀態所以setData放Edit */}
            <Edit add={setData} submittingStatus={submittingStatus} />
            {/* 值是從List裡面生出 所以date放List */}
            <List
                listData={data}
                deleteData={setData}
                submittingStatus={submittingStatus}
            />
        </div>
    );
};

export default Home;
