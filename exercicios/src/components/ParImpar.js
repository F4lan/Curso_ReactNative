import React from 'react';
import { View, Text } from 'react-native';
import Style from './estilo'

export default ({ num = 0 }) => {

    return (
        <View>
            <Text style={Style.txtG}>O resultado é: </Text>

            {num % 2 === 0
                ? <Text style={Style.txtG}>PAR</Text>
                : <Text style={Style.txtG}>IMPAR</Text>
            }
        </View>
    )
}