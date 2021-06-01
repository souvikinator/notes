import React, { Component } from "react";
import Add from "./Add";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notebookname: null,
        };
        this.createNewNotebook = this.createNewNotebook.bind(this);
    }

    createNewNotebook() {
        // TODO: add check for existing notebook name
    }

    render() {
        return (
            <div className="sidenav active">
                <ul>
                    <li>
                        <a href="#">Notebook-1</a>
                    </li>
                    <li>
                        <a href="#">Notebook-2</a>
                    </li>
                    <li>
                        <a href="#">Notebook-3</a>
                    </li>
                    <li>
                        <a href="#" onClick={this.createNewNotebook}>
                            <Add label="New Notebook" />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
