import React, { Component } from 'react';

import Header from './src/components/Header';
import {
  View,
} from 'react-native'
import Post from './src/components/Post';

export default class App extends Component {
  render() {

    const comments = [{
      nickname: 'Joaozinho gameplays',
      comment: 'Foto Maneira',
    }, {
      nickname: 'Mariazinha',
      comment: 'Achei uma Bosta',
    }, {
      nickname: 'Robertao',
      comment: 'Que legal um mato',
    }]


    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post
          image={require('./assets/imgs/fence.jpg')}
          comments={comments}
        />
      </View>
    )
  }
}