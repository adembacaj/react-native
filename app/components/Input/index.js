import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';

const Input = ({placeHolder, value, onChange}) => {
    return (
        <View style={styles.container}>
            <TextInput value={value} onChange={onChange} style={styles.input} placeholder={placeHolder} />
        </View>
    )
}

export default Input;