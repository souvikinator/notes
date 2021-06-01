import Navbar from "./components/Navbar";
import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
        };
        this.showSidebar = this.showSidebar.bind(this);
    }

    showSidebar(a) {
        this.setState({
            active: !a,
        });
    }

    render() {
        return (
            <div>
                <header className="sticky">
                    <GiHamburgerMenu
                        onClick={() => this.showSidebar(this.state.active)}
                    />
                </header>
                {this.state.active && <Navbar />}
            </div>
        );
    }
}

export default App;
