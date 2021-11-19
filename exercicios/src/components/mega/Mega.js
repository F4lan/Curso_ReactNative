import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Style from '../estilo'

import MegaNumero from './MegaNumero';

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: [],
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    gerarNumeros = () => {
        let numeros = []
        // const numeros = Array(this.state.qtdeNumeros)
        //     .fill()
        //     .reduce(n => [n, this.gerarNumeroNaoContido(n)], [])

        for (let index = 0; index < this.state.qtdeNumeros; index++) {
            numeros.push(this.gerarNumeroNaoContido(numeros))
        }

        numeros.sort((a, b) => a - b)
        console.log(numeros)
        this.setState({ numeros })
    }

    render() {
        return (
            <>
                <Text style={Style.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Numeros"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}