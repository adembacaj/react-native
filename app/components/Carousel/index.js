import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';

const Carousel = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.bigIcon} source={props.bigIcon} />
            <FlatList
                decelerationRate={"normal", 0.5}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
                style={styles.flatList}
                contentContainerStyle={styles.flatListContent}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={styles.icons} source={props.bigIcon} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
            />
        </View>
    )
}

export default Carousel;