import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import Header from '../../components/Header';
import images from '../../assets/images';
import ConversationItem from '../../components/ConversationItem';

const Conversation = (props) => {
    const {smallLogo, account} = images.conversation;
    const onItemPress = useCallback(() => {props.navigation.navigate('Messages')}, [])
    return (
        <View style={styles.container}>
            <Header icon={smallLogo} />
            <ConversationItem onPress={onItemPress} icon={account} />
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);