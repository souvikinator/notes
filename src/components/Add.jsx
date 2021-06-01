import React, { Component } from "react";
import { IoAdd } from "react-icons/io5";
class Add extends Component {
    render() {
        return (
            <div>
                <IoAdd /> {this.props.label}
            </div>
        );
    }
}

export default Add;
