import React from 'react';
import {connect} from 'react-redux';
import {itemDetail} from '../actions';

class ItemDetail extends React.Component {
    componentDidMount() {

        this.props.itemDetail(this.props.match.params.id)
    }
    getItem = id => {
        this.props.gettingDetail(id)
    }
    render() {
        return (
            <div>
                <p>{this.props.item.title}</p>
            </div>

        )
    }

    

}

const mapStateToProps = ({item, gettingDetail}) => ({
    item,
    gettingDetail
});

export default connect(
    mapStateToProps,
    {itemDetail}
)(ItemDetail)
