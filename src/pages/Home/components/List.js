import React from 'react';
import Item from './Item';

//拿父層的State變Props
const List = ({ listData }) => {
    return (
        <div className="list">
            {listData?.map((item) => {
                const { note, date, time } = item;
                return <Item note={note} date={date} time={time} />;
            })}
        </div>
    );
};

export default List;
