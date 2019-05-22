import React from 'react';
import {connect} from 'react-redux';
import {itemDetail, deleteItem} from '../actions';
import {withRouter} from 'react-router-dom';



class ItemDetail extends React.Component {
    state = {
        deletingItem: null
    }
    componentDidMount() {

        this.props.itemDetail(this.props.match.params.id)
        
    }
    getItem = id => {
        this.props.gettingDetail(id)
    }
    
    removeItem = id => {
        this.props.deleteItem(this.props.item.id).then(() => {
            this.props.history.push('/items');
        })

    
    }    
    render() {
        return (
            <div>
                <img src={this.props.item.imgURL} alt="upload"></img>
                <p>{this.props.item.title}</p>
                <p>{this.props.item.type}</p>
                <p>{this.props.item.description}</p>
                <p>{this.props.item.price}</p>
                <p>{this.props.item.availability}</p>
                <button>Edit</button>
                <button onClick={this.removeItem}>{this.props.deletingItem ? "Deleting" : "Delete Item"}</button>

            </div>

        )
    }

    

}

const mapStateToProps = ({ item, gettingDetail, deletingItem }) => ({
    deletingItem,
    item,
    gettingDetail
});

export default withRouter(
    connect(
        mapStateToProps,
        { itemDetail, deleteItem }
    )(ItemDetail)
);
