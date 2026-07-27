import React, { Component } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

class App extends Component {

    constructor() {

        super();

        this.state = {

            isLoggedIn: false

        };

    }

    login = () => {

        this.setState({

            isLoggedIn: true

        });

    };

    logout = () => {

        this.setState({

            isLoggedIn: false

        });

    };

    render() {

        let button;

        let page;

        if (this.state.isLoggedIn) {

            button = (

                <button onClick={this.logout}>

                    Logout

                </button>

            );

            page = <UserPage />;

        }

        else {

            button = (

                <button onClick={this.login}>

                    Login

                </button>

            );

            page = <GuestPage />;

        }

        return (

            <div style={{ margin: "30px" }}>

                <h1>Ticket Booking App</h1>

                {button}

                <hr />

                {page}

            </div>

        );

    }

}

export default App;