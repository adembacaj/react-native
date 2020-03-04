import React from 'react';
import { View, Image, Text } from 'react-native';
import images from '../../assets/images';
import styles from './style';

const Middle = ({ lokacioni, qmimi }) => {
    const { location, price } = images.home;
    return (
        <View style={styles.footer}>
            <View style={styles.footerLeft}>
                <Image style={styles.footerIcon} source={location} />
                <Text style={styles.location}>{lokacioni}</Text>
            </View>
            <View style={styles.footerRight}>
                <Image style={styles.footerIcon} source={price} />
                <Text style={styles.price}>{`$ ${qmimi}`}</Text>
            </View>
        </View>
    )
}

export default Middle;