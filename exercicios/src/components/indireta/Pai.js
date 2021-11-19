import React, { useState } from 'react';
import { Text } from 'react-native'


import Filho from './Filho';

export default (props) => {

    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState("")

    function exibeValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
            <Text>{texto} {num}</Text>
            <Filho
                min={1}
                max={60}
                funcao={exibeValor}
            />
        </>
    )
}