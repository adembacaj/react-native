import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import images from '../../assets/images';
//components
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = (props) => {
    const back = useCallback(() => { props.navigation.goBack() }, [])
    const forgot = useCallback(() => {props.navigation.navigate('Forgot')}, [])
    return (
        <View style={styles.container}>
            <Header back={back} title="Login" />
            <View style={styles.wrapper}>
                <Image style={styles.icon} source={images.login} />
                <Input placeHolder="Email" />
                <Input placeHolder="Fjalekalimi" />
                <Button text="Kyçu" backgroundColor="rgba(92, 102, 127, 0.1)" borderColor="rgba(92, 102, 127, 0.3)" />
                <TouchableOpacity onPress={forgot} style={styles.forgot} activeOpacity={0.6}>
                    <Text style={styles.forgotText}>Rikthe fjalekalimin</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Login);