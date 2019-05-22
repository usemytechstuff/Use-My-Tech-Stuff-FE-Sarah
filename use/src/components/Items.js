import React from 'react';
import Item from './Item';
import {connect} from 'react-redux';

import {fetchItems} from '../actions';
import {withRouter} from 'react-router-dom';

class Items extends React.Component {
    constructor() {
        super();

    }


    componentDidMount() {
        this.props.fetchItems();
    }

    render() {

        
        return (
            <div>
                {this.props.items.map(item =>
                    <Item key={item.id} item={item} />)}
            </div>
        )      
        
    }
}

const mapStateToProps = ({ items, fetchingItems}) => ({
    items,
    fetchingItems
});

export default withRouter(
    connect(
        mapStateToProps,
        { fetchItems }
    )(Items)
);