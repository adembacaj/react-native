import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import Header from '../../components/Header';
import images from '../../assets/images';
import Carousel from '../../components/Carousel';
import PostInfo from '../../components/PostInfo';
import PostDescription from '../../components/PostDescription';

const Post = (props) => {
    const [data, setData] = useState([])
    const { smallLogo, conversation, phone } = images.post;
    const back = useCallback(() => { props.navigation.goBack() }, []);
    useEffect(() => { setData(props.route.params.item) }, [props])
    return (
        <View style={styles.container}>
            <Header back={back} icon={smallLogo} />
            <ScrollView>
                <Carousel bigIcon={data.icon} />
                <PostInfo {...data} seats="5" carTable="Kosovare" />
                <PostDescription />
                <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                    <Image source={conversation} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Kontakto direkt me shitesin</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <Image source={phone} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>049838861</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Post);