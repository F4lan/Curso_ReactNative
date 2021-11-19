import React from 'react';
import { View, Text } from 'react-native'
import Style from './estilo'

export default (props) => {

    return (
        <>
            <Text style={Style.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    )
}