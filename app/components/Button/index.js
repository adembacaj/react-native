import React from 'react';
import {TouchableHighlight, TouchableOpacity, Text} from 'react-native';
import styles from './style';

const Button = ({ text, onPress, marginBottom, backgroundColor, borderColor, isRed }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, {marginBottom, backgroundColor, borderColor}]}>
            <Text style={[styles.text, {color: isRed ? '#FF0000' : '#5C667F'}]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;