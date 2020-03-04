import React, { useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, RefreshControl, ImageBackground } from 'react-native';
import images from '../../assets/images';
import styles from './style';
import data from './data';

import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';

const PostsList = (props) => {
    const [refreshing, refresh] = useState(false);
    const onRefresh = useCallback(() => { console.log('refresh the list') }, [])
    const onPress = useCallback((item) => props.onItemPress(item))
    return (
        <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            decelerationRate={"normal", 0.5}
            showsVerticalScrollIndicator={false}
            data={data}
            style={styles.flatList}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPress(item)} activeOpacity={0.8} style={styles.item}>
                    <Header {...item} />
                    <Middle {...item} />
                    <Footer {...item} />
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default PostsList;