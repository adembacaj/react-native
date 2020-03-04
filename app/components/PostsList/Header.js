import React from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import images from '../../assets/images';
import styles from './style';

const Header = ({ name, date, icon, isEdit, editPress }) => {
    const { car, editPost } = images.home;
    return (
        <ImageBackground imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={icon} style={styles.car}>
            {isEdit && <TouchableOpacity onPress={editPress} activeOpacity={0.6} style={styles.edit}>
                <Image style={styles.editIcon} source={editPost} />
            </TouchableOpacity>}
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