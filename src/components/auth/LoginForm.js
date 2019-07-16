import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { authenticationService } from '../services/authentication.service';
import { isLoggedIn } from '../services';
import { Header, Input } from '../common';


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    validateForm = () => this.state.email.length > 0 && this.state.password.length > 0;

    onButtonPress() {
        const { email, password } = this.state;
        authenticationService.login(email, password)
            .then(isLoggedIn())
            .then(this.onLoginSuccess.bind(this))
            .catch (this.onLoginFail.bind(this));

    };

    onLoginFail() {
        alert('Login Failed');
    };

    onLoginSuccess() {
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <View>
                <Header headerText={'LOGIN'}/>
                <View style={styles.inputStyle}>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                     />
                </View>

                <View style={styles.inputStyle}>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <TouchableOpacity style={styles.buttonStyle}  disabled={!this.validateForm} onPress={this.onButtonPress.bind(this)}
                >
                    <Text style={styles.buttonTextStyle}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.inputStyle}>
                    <Image style={styles.imageStyle} source={require('./login.png')} />
                </View>
            </View>
        );
    }
}

const styles = {
    inputStyle: {
        padding: 5,
        backgroundColor: '#93e7cf',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#3b5060',
        height: 40,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#3b5060',
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 10
    },
    imageStyle: {
        marginTop: 60,
        height: 300,
        flex: 1,
        width: null
    }
};

export default LoginForm;
