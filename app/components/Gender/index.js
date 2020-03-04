import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';

const Gender = ({ maleClick, femaleClick, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity onPress={maleClick} style={[styles.male, {backgroundColor: value === 'male' ? 'rgba(92, 102, 127, 0.1)' : '#ffffff'}]}>
                    <Text style={[styles.maleText, {color: value === 'male' ? 'rgba(92, 102, 127, 0.8)' : 'rgba(0, 0, 0, 0.2)'}]}>Mashkull</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={femaleClick} style={[styles.female, {backgroundColor: value === 'female' ? 'rgba(92, 102, 127, 0.1)' : '#ffffff'}]}>
                    <Text style={[styles.femaleText, {color: value === 'female' ? 'rgba(92, 102, 127, 0.8)' : 'rgba(0, 0, 0, 0.2)'}]}>Femer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Gender;