import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text
} from 'react-native'
import { connect } from "react-redux";

import Author from "./Author";
import Comments from "./Comments";
import AddComent from "./AddComment"

class Post extends Component {
    render() {
        const addComent = this.props.name
            ? <AddComent postId={this.props.id} />
            : null

        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: this.props.image.uri }}
                    style={styles.image}
                />
                <Author
                    email={this.props.email}
                    nickname={this.props.nickname}
                />
                <Comments
                    comments={this.props.comments}
                />
                {addComent}
            </View>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps, null)(Post)
// export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    },
})
