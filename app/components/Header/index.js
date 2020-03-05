import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import images from '../../assets/images';

const Header = ({ back, title, icon, isProfile }) => {
    const { backButton, logOut } = images.header;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={back} activeOpacity={0.5} style={styles.left}>
                {back && <Image style={styles.back} source={backButton} />}
            </TouchableOpacity>
            <View style={styles.middle}>
                {icon ? <Image style={styles.headerIcon} source={icon} /> : <Text style={styles.middleText}>{title}</Text>}
            </View>
            <TouchableOpacity activeOpacity={0.5} style={styles.right}>
                {isProfile && <Image style={styles.back} source={logOut} />}
            </TouchableOpacity>
        </View>
    )
}

export default Header;