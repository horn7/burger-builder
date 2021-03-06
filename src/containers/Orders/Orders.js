import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
       this.props.onFetchOrders(this.props.token);
    }

    render () {
        let order = <Spinner />;
        if(!this.props.loading){
            order = this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
        }
        return (
            <div>
                { order }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading,
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));