import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import params from './src/params'


export default class APP extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da Grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})