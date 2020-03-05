import React from 'react';
import {View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import images from '../../assets/images';
import styles from './style';

const SendMessage = (props) => {
    const {attach, send} = images.messages;
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={styles.left}>
                <Image style={styles.attach} source={attach} />
            </TouchableOpacity>
            <View style={styles.middle}>
                <TextInput style={styles.textInput} placeholder="Type a message..." />
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.right}>
                <Image style={styles.send} source={send} />
            </TouchableOpacity>
        </View>
    )
}

export default SendMessage;