import React from 'react';
import { View, Text, Image } from 'react-native';
import images from '../../assets/images';
import styles from './style';

const PostInfo = (props) => {
    const { marke, model, seats, colors, motor, carDoor, carTable, calendar } = images.post.postInfo;
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.left}>
                    <View style={[styles.item, { borderColor: '#B44928' }]}>
                        <Image source={marke} style={styles.icon} />
                        <Text style={styles.text}>{props.marka}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={[styles.item, { borderColor: '#000000' }]}>
                        <Image source={motor} style={styles.icon} />
                        <Text style={styles.text}>{props.motori}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.left}>
                    <View style={[styles.item, { borderColor: '#246C72' }]}>
                        <Image source={model} style={styles.icon} />
                        <Text style={styles.text}>{props.modeli}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={[styles.item, { borderColor: '#208050' }]}>
                        <Image source={carDoor} style={styles.icon} />
                        <Text style={styles.text}>{props.dyer}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.left}>
                    <View style={[styles.item, { borderColor: '#868B8B' }]}>
                        <Image source={seats} style={styles.icon} />
                        <Text style={styles.text}>{props.seats}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={[styles.item, { borderColor: '#541BB0' }]}>
                        <Image source={carTable} style={styles.icon} />
                        <Text style={styles.text}>{props.carTable}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.left}>
                    <View style={[styles.item, { borderColor: '#868B8B' }]}>
                        <Image source={colors} style={styles.icon} />
                        <Text style={styles.text}>{props.ngjyra}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={[styles.item, { borderColor: '#3B9F8F' }]}>
                        <Image source={calendar} style={styles.icon} />
                        <Text style={styles.text}>{props.viti}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PostInfo;