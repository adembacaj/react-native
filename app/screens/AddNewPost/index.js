import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';

const AddNewPost = (props) => {
    return (
        <View style={styles.container}>
            <Text>Add New Post</Text>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPost);