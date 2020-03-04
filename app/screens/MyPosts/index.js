import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';

const MyPosts = (props) => {
    return (
        <View style={styles.container}>
            <Text>MyPosts</Text>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);