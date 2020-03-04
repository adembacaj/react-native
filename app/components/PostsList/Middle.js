import React from 'react';
import { View, Image, Text } from 'react-native';
import images from '../../assets/images';
import styles from './style';

const Middle = ({ marka, modeli, viti, motori, dyer, ngjyra }) => {
    const { marke, model, calendar, motor, carDoor, colors } = images.home;
    return (
        <View style={styles.middle}>
            <View style={styles.middleLeft}>
                <View style={styles.middleItem}>
                    <Image style={styles.middleIcon} source={marke} />
                    <Text style={styles.middleText}>{marka}</Text>
                </View>
                <View style={styles.middleItem}>
                    <Image style={styles.middleIcon} source={model} />
                    <Text style={styles.middleText}>{modeli}</Text>
                </View>
                <View style={styles.middleItem}>
                    <Image style={styles.middleIcon} source={calendar} />
                    <Text style={styles.middleText}>{viti}</Text>
                </View>
            </View>
            <View style={styles.middleRight}>
                <View style={styles.middleItem}>
                    <Image style={styles.middleIcon} source={motor} />
                    <Text style={styles.middleText}>{motori}</Text>
                </View>
                <View style={styles.middleItem}>
                    <Image style={styles.middleIcon} source={carDoor} />
                    <Text style={styles.middleText}>{dyer}</Text>
                </View>
                <View style={styles.middleItem}>
                    <Image style={styles.middleIcon} source={colors} />
                    <Text style={styles.middleText}>{ngjyra}</Text>
                </View>
            </View>
        </View>
    )
}

export default Middle;