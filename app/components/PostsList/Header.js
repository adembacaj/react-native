import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import images from '../../assets/images';
import styles from './style';

const Header = ({ name, date, icon }) => {
    const { car } = images.home;
    return (
        <ImageBackground imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={icon} style={styles.car}>
            <View style={styles.carFooter}>
                <View style={styles.carFooterLeft}>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.carFooterRight}>
                    <Text style={styles.day}>{date}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Header;