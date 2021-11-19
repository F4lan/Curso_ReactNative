import React from 'react';
import { Text } from 'react-native'

export default (props) => {
    return (
        <>
            <Text>[Inicio] Membros da Família: </Text>
            {props.children}
            <Text>[Fim] Membros da Família: </Text>
        </>
    )
}