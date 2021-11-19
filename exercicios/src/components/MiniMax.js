import React from "react";
import { Text } from 'react-native'
import Style from './estilo'

export default (props) => {
    return (
        <Text style={Style.txtG}>
            O valor {props.max} é maior que o valor {props.min}!
        </Text>
    )
}
