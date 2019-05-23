import React from 'react';
import {connect} from 'react-redux';
import {itemDetail, deleteItem} from '../actions';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation'



class ItemDetail extends React.Component {
    state = {
        deletingItem: null,
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
                <Navigation />
           
                <FormContainer className="card mb-3" >
                
                    <div className="row no-gutters">
                        <div className="col-md-6 image-container">
                            <Image src={this.props.item.imgURL} alt="upload"/>
                        </div>
                        <div className="row-md-6">
                            <CardBody className="card-body">
                                <h5 className="card-title">{this.props.item.title}</h5>
                                <p className="card-text">{this.props.item.type}</p>
                                <p className="card-text">{this.props.item.description}</p>
                                <p className="card-text">{this.props.item.price}</p>
                                <p className="card-text">{this.props.item.availability}</p>
                                <Link to={`/items/${this.props.item.id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={this.removeItem}>{this.props.deletingItem ? "Deleting" : "Delete Item"}</button>
                            </CardBody>
                        </div>
                    </div>
                </FormContainer>
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

const FormContainer = styled.div`
    max-width: 500px;
    justify-content: space-around;
    align-content: center;
    height: 750px;
    margin: auto;
    margin-top: 100px;
    align-content: center;
`
const CardBody = styled.div`

    width: 500px; 
    margin: auto;
    align-content: center;
 
`
const Image =styled.img`
    width: 500px;
    
    margin: auto;
    align-content: center;
` 
