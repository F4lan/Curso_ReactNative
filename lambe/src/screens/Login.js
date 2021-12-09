import React, { Component } from "react";
import { connect } from 'react-redux'
import { login } from '../store/actions/user'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {
    state = {
        name: 'temporario',
        email: '',
        password: '',
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Profile')
        }
    }

    login = () => {
        this.props.onLogin({ ...this.state })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoFocus={true}
                    value={this.state.email}
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity
                    style={styles.buttom}
                    onPress={this.login}
                >
                    <Text style={styles.buttomText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttom}
                    onPress={() => {
                        this.props.navigation.navigate('Register')
                    }}
                >
                    <Text style={styles.buttomText}>
                        Criar nova conta...
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

// export default Login
export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})