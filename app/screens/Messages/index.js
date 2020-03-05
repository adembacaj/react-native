import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import images from '../../assets/images';
import Header from '../../components/Header';
import SendMessage from '../../components/SendMessage';

const Messages = (props) => {
    const {smallLogo, send, attach} = images.messages;
    const back = useCallback(() => {props.navigation.goBack()}, [])
    return (
        <View style={styles.container}>
            <Header back={back} icon={smallLogo} />
            <SendMessage />
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Messages);