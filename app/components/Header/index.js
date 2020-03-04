import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import images from '../../assets/images';

const Header = ({ back, title, icon }) => {
    const { backButton } = images.header;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={back} activeOpacity={0.5} style={styles.left}>
                <Image style={styles.back} source={backButton} />
            </TouchableOpacity>
            <View style={styles.middle}>
                {icon ? <Image style={styles.headerIcon} source={icon} /> : <Text style={styles.middleText}>{title}</Text>}
            </View>
            <View style={styles.right}></View>
        </View>
    )
}

export default Header;