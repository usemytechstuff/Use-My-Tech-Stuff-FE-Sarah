import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions';
import styled from 'styled-components'

class ItemForm extends React.Component {
    state = {
        item: {
            title: '',
            type: '',
            description: '',
            price: '',
            availability: true,
            imgURL: '',
            owner: 1,
        }
    };

    handleItemChange = e => {
        this.setState({
            item: {
                ...this.state.item,
                [e.target.name]: e.target.value
            }
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item).then(() => {
            this.props.history.push('/items');
        });
        this.setState({
            item: {
            title: '',
            type: '',
            description: '',
            price: '',
            availability: false,
            imgURL: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Add an item</h1>
                <Form onSubmit={this.submitItem}>
                    <label>
                        Title
                        <input
                            type="text"
                            name="title"
                            value={this.state.item.title}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        Image URL
                        <input
                            type="text"
                            name="imgURL"
                            value={this.state.item.imgURL}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        Type
                        <input
                            type="text"
                            name="type"
                            value={this.state.item.type}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        description
                        <input
                            type="text"
                            name="description"
                            value={this.state.item.description}
                            onChange={this.handleItemChange}
                        />
                    </label> 
                    <label>
                        price
                        <input
                            type="integer"
                            name="price"
                            value={this.state.item.price}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        availability
                        <input
                            type="boolean"
                            name="availability"
                            value={this.state.item.availability}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <Button onClick={this.submitItem}>{this.props.addingItem ? "Loading" : "Add Item"}</Button>

                </Form>
            </div>
        )
    }

}

const mapStateToProps = ({owner, addingItem}) => ({
    owner,
    addingItem
});

    export default connect(
        mapStateToProps,
        {addItem}
    )(ItemForm) 

    const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 800px;
    width: 600px;
    margin: auto;
    input {
      width: 600px;
      height: 50px;
      margin: 10px 0;
      padding: 0 10px;
      box-sizing: border-box;
      border: 1px solid gainsboro;
      border-radius: 5px;
      font-size: 18px;
      outline: none;
    }
  `
  
  const Button = styled.button`
    height: 50px;
    width: 400px;
    margin: 10px auto;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: blueviolet;
    border: 1px solid blueviolet;
    border-radius: 5px;
    cursor: pointer;
  `