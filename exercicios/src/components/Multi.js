import React from 'react';
import { Text } from 'react-native'
import Style from './estilo'

export default function Comp1() {
    return <Text style={Style.txtG}> Comp #01 </Text>
}

export function Comp2() {
    return <Text style={Style.txtG}> Comp #02 </Text>
}

export function Comp3() {
    return <Text style={Style.txtG}> Comp #03 </Text>
}
