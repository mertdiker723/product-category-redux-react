import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {

    render() {
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand" href="#">Windows</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="btn btn-outline-success mr-2" type="button" onClick={() => this.props.history.push("/")}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success mr-2" type="button" onClick={() => this.props.history.push("/product")}>Products</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success" type="button" onClick={() => this.props.history.push("/category")}>Categories</button>
                        </li>
                    </ul>
                   
                </div>
            </nav>
        )
    }
}




export default withRouter(Navbar);