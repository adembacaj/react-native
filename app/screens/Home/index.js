import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import Search from '../../components/Search';
import PostList from '../../components/PostsList';

const Home = (props) => {
    settings = useCallback(() => { props.navigation.navigate('Filters') }, [])
    return (
        <View style={styles.container}>
            <Search settings={settings} />
            <PostList />
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Home);