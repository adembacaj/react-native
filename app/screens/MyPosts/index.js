import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import Search from '../../components/Search';
import PostList from '../../components/PostsList';

const MyPosts = (props) => {
    const editPress = useCallback((item) => { props.navigation.navigate('EditMyPost', { item }) }, [])
    return (
        <View style={styles.container}>
            <Search settings={settings} />
            <PostList isEdit={true} editPress={editPress} onItemPress={onItemPress} />
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);