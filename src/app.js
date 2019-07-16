import React, { Component } from 'react';
import { View } from 'react-native';
import { isLoggedIn } from './components/services';
import LoginForm from './components/auth/LoginForm';
import Home from './components/home/Home';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authChecked: false,
            isAuthenticated: false
        };
    }

    componentDidMount() {
        isLoggedIn()
            .then(res => this.setState({ authChecked: true, isAuthenticated: res }))
            .catch(err => alert("An error occurred"));
    }

    renderContent() {
        const { authChecked, isAuthenticated } = this.state;

        if (!authChecked) {
            return null;
        } else if (isAuthenticated) {
            return (
                <Home />
            )
        }
        return <LoginForm />;
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#93e7cf' }}>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
