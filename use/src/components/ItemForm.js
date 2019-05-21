import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions';

class ItemForm extends React.Component {
    state = {
        item: {
            title: '',
            type: '',
            description: '',
            price: '',
            availability: '',
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
        this.props.addItem(this.state.item)
        .then(() => this.props.history.push('/'))
    };

    render() {
        return (
            <div>
                <p>Add an item</p>
                <form onsubmit={this.submitItem}>
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
                            value={this.item.description}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        price
                        <input
                            type="integer"
                            name="price"
                            value={this.item.price}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        availability
                        <input
                            type="boolean"
                            name="availability"
                            value={this.item.availability}
                            onChange={this.handleItemChange}
                        />
                    </label>

                </form>
            </div>
        )
    }

}

const mapStateToProps = ({addingItem}) => ({
    addingItem
});

    export default connect(
        mapStateToProps,
        {addItem}
    )(ItemForm)