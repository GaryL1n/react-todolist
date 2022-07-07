import React from 'react';
import { useState } from 'react';
// 給一個唯一值的套件
import { v4 } from 'uuid';

const Edit = ({ add, submittingStatus }) => {
    const [note, setNote] = useState('');
    // 讓input的note值不會被綁死
    function noteChange(e) {
        setNote(e.target.value);
    }

    const [date, setDate] = useState('');
    function dateChange(e) {
        setDate(e.target.value);
    }

    const [time, setTime] = useState('');
    function timeChange(e) {
        setTime(e.target.value);
    }

    function addItem() {
        submittingStatus.current = true;
        add((prevData) => [
            {
                id: v4(),
                note,
                date,
                time,
            },
            ...prevData,
        ]);
    }

    return (
        <div>
            <h1>備忘錄</h1>
            <p>記事:</p>
            <input type="text" value={note} onChange={noteChange} />
            <p>日期:</p>
            <input type="date" value={date} onChange={dateChange} />
            <p>時間:</p>
            <input type="time" value={time} onChange={timeChange} />
            <button onClick={addItem} className="add">
                新增
            </button>
        </div>
    );
};

export default Edit;
