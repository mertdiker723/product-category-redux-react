import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { categoryDeleteAction, categoryGetItemAction } from '../../action/actions/action-category'
class Category extends Component {   
    deleteCategory = (item) => {
        this.props.onDeleteCategory(item);
    }

    editItem = async (item) => {
        await this.props.history.push(this.props.route);
        this.props.onGetCategory({
            id: item.id,
            name: item.name,
            desc: item.desc,
            showUpdateButton: true
        });        
    }

    addItem = () => {
        this.props.history.push(this.props.route);
        this.props.onGetCategory({
            showUpdateButton:false
        })
    }
    
    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Category ID</th>
                            <th>Category Name</th>
                            <th>Category Description</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.categories.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.desc}</td>
                                    <td className="text-center">
                                        <button onClick={() => this.deleteCategory(item)} className="btn btn-danger mr-2">Delete</button>
                                        <button onClick={() => this.editItem(item)} className="btn btn-success">Update</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button className="btn btn-primary float-right" onClick={this.addItem}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category
    }
}

const mapDispatchToProps = {
    onDeleteCategory: categoryDeleteAction,
    onGetCategory: categoryGetItemAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));