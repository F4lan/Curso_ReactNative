import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    FlatList,
    View,
} from 'react-native'
import { fetchPosts } from '../store/actions/posts'

import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {

    componentDidMount = () => {
        this.props.onFetchPosts()
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post
                            key={item.id}
                            {...item}
                        />}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
// export default Feed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})