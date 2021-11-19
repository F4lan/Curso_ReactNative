import React from 'react';
import { Platform, Text } from 'react-native';
import Style from './estilo'

export default (props) => {

    if (Platform.OS === 'android') {
        return <Text style={Style.txtG}> Android </Text>
    } else if (Platform.OS === 'ios') {
        return <Text style={Style.txtG}> IOS </Text>
    } else {
        <Text style={Style.txtG}> Eita!! </Text>
    }
}