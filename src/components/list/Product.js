import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { productDeleteAction, productGetItemAction } from '../../action/actions/action-product';


class Product extends Component {

    editItem = async (item) => {
        await this.props.history.push(this.props.route);
        this.props.onGetProduct({
            id: item.id,
            name: item.name,
            place: item.place,
            price: item.price,
            category: item.category,
            showUpdateButton: true
        });
        console.log(item);
        
    }

    addItem = () => {
        this.props.history.push(this.props.route);
        this.props.onGetProduct({
            showUpdateButton:false
        })
    }
    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Production Place</th>
                            <th>Price</th>
                            <th>Product Category</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.place}</td>
                                    <td>{item.price}</td>
                                    <td>{this.props.categories.map(t => t.id === item.category && t.name)}</td>
                                    <td className="text-center">
                                        <button onClick={() => this.props.onDeleteProduct(item)} className="btn btn-danger mr-2">Delete</button>
                                        <button onClick={() => this.editItem(item)} className="btn btn-success">Update</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                <button className="btn btn-primary float-right" onClick={this.addItem}>Add</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category,
        products: state.product
    }
}

const mapDispatchToProps = {
    onDeleteProduct: productDeleteAction,
    onGetProduct:productGetItemAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));