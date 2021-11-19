import React from 'react';
import { View, Text } from 'react-native';
import Style from '../estilo'

import produtos from './produtos';

export default (props) => {

    function lista() {
        return produtos.map(p => {
            return <Text key={p.id}> {p.id}) {p.nome} custa R$ {p.preco}</Text>
        })
    }

    return (
        <>
            <Text style={Style.txtG}>Lista de Produtos:</Text>
            {lista()}
        </>
    )
}