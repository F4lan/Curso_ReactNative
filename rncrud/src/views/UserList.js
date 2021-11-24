import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import users from '../data/users'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja realmente excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('Deletar Usuario!' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getAction(user) {
        return (
            <>
                <Button
                    onPress={() => {
                        props.navigation.navigate("UserForm", user)
                    }}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={{ item: user }}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
                rightElement={getAction(user)}
            >
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => { confirmUserDeletion(user) }}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>

    )
}