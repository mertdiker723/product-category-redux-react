import React, { Component } from 'react'
import { connect } from 'react-redux'
import { categoryAddAction, categoryUpdateAction } from '../../action/actions/action-category';
import _ from 'lodash'
class CategoryAdd extends Component {

    constructor(props) {
        super(props);

        this.inputElement = React.createRef();

        this.state = {
            showAlert: false,
            name: "",
            desc: "",
        }
    }

    componentDidMount() {
        this.inputElement.current.focus();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.oneCategory !== this.props.oneCategory) {//
            this.setState({
                id: this.props.oneCategory.id,
                name: this.props.oneCategory.name,
                desc: this.props.oneCategory.desc,
                showUpdateButton: true
            })
        }
    }

    addCategory = async (e) => {
        e.preventDefault();
        if (this.state.name.trim() !== "") {
            await this.props.onAddCategory({
                id: _.uniqueId(),
                name: this.state.name,
                desc: this.state.desc,
                showUpdateButton: false
            })
            alert("Category is added");
            this.setState({
                name: "",
                desc: ""
            })
        }
        else {
            alert("Category name cannot be null");
        }
        this.inputElement.current.focus();
    }

    updateCategory = async (e) => {
        e.preventDefault();        
        await this.props.onUpdateCategory({
            id: this.props.oneCategory.id,
            name: this.state.name,
            desc: this.state.desc,            
        })
        await alert("Update successful");
        this.props.history.push("/category");
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={!this.props.oneCategory.showUpdateButton ? this.addCategory : this.updateCategory}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="categoryName">Category Name</label>
                            <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} ref={this.inputElement} required maxLength={10} type="text" className="form-control" id="categoryName" placeholder="Enter Category Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="categoryDesc">Category Description</label>
                            <input value={this.state.desc} onChange={(e) => this.setState({ desc: e.target.value })} maxLength={15} type="text" className="form-control" id="categoryDesc" placeholder="Enter Description" />
                        </div>
                    </div>
                    {!this.props.oneCategory.showUpdateButton ?
                        <button type="submit" className="btn btn-info">Add</button>
                        :
                        <button type="submit" className="btn btn-success">Update</button>}
                    <button type="button" onClick={() => this.props.history.push("/category")} className=" btn btn-secondary float-right">Back To Category</button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        oneCategory: state.categoryOne
    }
}

const mapDispatchToProps = {
    onAddCategory: categoryAddAction,
    onUpdateCategory: categoryUpdateAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdd);