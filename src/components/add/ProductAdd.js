import React, { Component } from 'react'
import { connect } from 'react-redux';
import { productAddAction, productUpdateAction } from '../../action/actions/action-product';
import _ from 'lodash'
class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.inputElement = React.createRef();

        this.state = {
            productName: "",
            productPlace: "",
            productPrice: '',
            productCategory: undefined
        }
    }

    componentDidMount() {
        this.inputElement.current.focus();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.oneProduct !== this.props.oneProduct) {//
            this.setState({
                id: this.props.oneProduct.id,
                productName: this.props.oneProduct.name,
                productPlace: this.props.oneProduct.place,
                productPrice: this.props.oneProduct.price,
                productCategory: this.props.oneProduct.category,
                showUpdateButton: true
            })
        }
    }

    addProduct = async (e) => {
        e.preventDefault();
        if (this.state.productCategory !== "Select Category" && this.state.productCategory) {
            await this.props.onAddProduct({
                id: _.uniqueId(),
                name: this.state.productName,
                place: this.state.productPlace,
                price: Number(this.state.productPrice),
                category: this.state.productCategory,
                showUpdateButton: false
            });
            alert("Product is add");
            this.setState({
                productName: "",
                productPlace: "",
                productPrice: '',
                productCategory: "Select Category"
            })
        }
        else {
            alert("Category cannot be null")
        }
        this.inputElement.current.focus();
    }

    updateProduct = async (e) => {
        e.preventDefault();
        await this.props.onUpdateProduct({
            id: this.props.oneProduct.id,
            name: this.state.productName,
            place: this.state.productPlace,
            price: Number(this.state.productPrice),
            category: this.state.productCategory
        })

        await alert("Update successful");
        this.props.history.push("/product");
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={!this.props.oneProduct.showUpdateButton ? this.addProduct : this.updateProduct}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="productName">Product Name</label>
                            <input value={this.state.productName} onChange={(e) => this.setState({ productName: e.target.value })} ref={this.inputElement} required type="text" className="form-control" id="productName" placeholder="Enter Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="productPlace">Product Place</label>
                            <input value={this.state.productPlace} onChange={(e) => this.setState({ productPlace: e.target.value })} required type="text" className="form-control" id="productPlace" placeholder="Enter Place" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="productPrice">Product Price</label>
                            <input value={this.state.productPrice} onChange={(e) => this.setState({ productPrice: e.target.value })} required type="number" className="form-control" id="productPrice" placeholder="Enter Price" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="productCategory">Product Category</label>
                            <select defaultValue={"Select Category"} value={this.state.productCategory} onChange={(e) => this.setState({ productCategory: e.target.value })} id="productCategory" className="form-control">
                                <option disabled>Select Category</option>
                                {this.props.categories.map(item => {
                                    return (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    {!this.props.oneProduct.showUpdateButton ?
                        <button type="submit" className="btn btn-info">Add</button>
                        :
                        <button type="submit" className="btn btn-success">Update</button>}
                        <button type="button" onClick={() => this.props.history.push("/product")} className=" btn btn-secondary float-right">Back To Product</button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category,
        oneProduct: state.productOne
    }
}

const mapDispatchToProps = {
    onAddProduct: productAddAction,
    onUpdateProduct: productUpdateAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);