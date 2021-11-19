import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Style from '../estilo'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: qtde })
    }

    render() {
        return (
            <>
                <Text style={Style.txtG}>
                    Gerador de Mega-Sena {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Numeros"
                    // value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtdeNumero}
                />
            </>
        )
    }
}