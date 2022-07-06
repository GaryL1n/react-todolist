import React from 'react';
import Item from './Item';

    //拿父層的State變Props
const List = ({listDate}) => {
    return (
        <div className="list">
            {
                listDate.map(item =><Item key={item} />)
            }
        </div>
    );
};

export default List;
