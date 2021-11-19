import React from 'react';
import { View, Text } from 'react-native';
import Style from '../estilo'

export default (props) => {
    return (
        <Text style={Style.txtG}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}