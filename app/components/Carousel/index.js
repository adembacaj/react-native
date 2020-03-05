import React from 'react';
import { View, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import images from '../../assets/images';

const Carousel = (props) => {
    const {addNewPost} = images.carousel;
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
                renderItem={({ item, index }) => (
                    index === 0
                        ?
                        <TouchableOpacity style={styles.addNewImage} activeOpacity={0.8}>
                            <Image style={styles.addIcon} source={addNewPost} />
                        </TouchableOpacity>
                        :
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