import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';

const Input = ({placeHolder}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeHolder} />
        </View>
    )
}

export default Input;