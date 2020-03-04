import React from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import styles from './style';

const Search = (props) => {
    const {searchIcon, settingsIcon} = images.search;
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.search}>
                    <Image source={searchIcon} style={styles.searchIcon} />
                    <TextInput style={styles.input} placeholder="Kerko..." />
                </View>
            </View>
            <TouchableOpacity onPress={props.settings} activeOpacity={0.6} style={styles.right}>
                <Image style={styles.settingsIcon} source={settingsIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default Search;