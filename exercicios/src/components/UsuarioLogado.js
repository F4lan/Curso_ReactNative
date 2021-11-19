import React from 'react';
import { View, Text } from 'react-native';
import Style from './estilo'

import If from './If';

export default (props) => {
    const usuario = props.usuario || {}

    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Style.txtG}>
                    Usuario Logado:
                </Text>
                <Text style={Style.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}