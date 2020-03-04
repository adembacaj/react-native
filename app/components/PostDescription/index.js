import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const PostDescription = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}># Description</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    Lorem ipsum dolores ipsum Lorem ipsum dolores ipsumLorem ipsum dolores ipsumLorem ipsum dolores ipsumLorem ipsum dolores ipsum
                </Text>
            </View>
        </View>
    )
}

export default PostDescription;