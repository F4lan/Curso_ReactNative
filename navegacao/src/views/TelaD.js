import React from 'react';
import TextoCentral from '../components/TextoCentral';
import { View, Button } from 'react-native'

export default (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    title='Abrir'
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawer()
                            }, 1000)
                        }, 1500)
                    }}
                />
            </View>

            <View style={{ flex: 1 }}>
                <TextoCentral corFundo='#33FA72' corTexto='#000'>
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}