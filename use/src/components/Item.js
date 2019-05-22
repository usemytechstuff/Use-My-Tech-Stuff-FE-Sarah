import React from 'react';

const Item = props => {
    return (
        <div>
            <p>{props.item.title}</p>
            <p>{props.item.description}</p>
        </div>
    )
       
}

export default Item;