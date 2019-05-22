import React from 'react';
import {Link} from 'react-router-dom';

const Item = props => {


    
    return (
        <Link to={`/item-detail/${props.item.id}`} >
            <div>
                <p>{props.item.title}</p>
                <p>{props.item.description}</p>
                <img src={props.item.imgURL}></img>
            </div>
        </Link>
    )
       
}

export default Item;    