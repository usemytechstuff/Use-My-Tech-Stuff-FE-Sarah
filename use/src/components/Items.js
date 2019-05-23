import React from 'react';
import Item from './Item';
import {connect} from 'react-redux';
import {fetchItems} from '../actions';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';

class Items extends React.Component {


    componentDidMount() {
        this.props.fetchItems();
    }
    render() {
        return (
            <div>
                <Navigation />
                <ItemsContainer className="card-deck">
                    {this.props.items.map(item =>
                        <Item key={item.id} item={item} />)}
                </ItemsContainer>
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

const ItemsContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    padding-top: 30px;
    border-top: 2px solid blueviolet;
`

