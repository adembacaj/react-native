import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const ConversationItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.avatar} source={props.icon} />
            </View>
            <View style={styles.middle}>
                <Text style={styles.middleTitle}>Fidan Bacaj</Text>
                <Text style={styles.middleSubtitle}>pershendetje shoku...</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.rightDate}>today</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ConversationItem;