import React, { useCallback, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import images from '../../assets/images';
import Button from '../../components/Button';

const Auth = (props) => {
    useEffect(() => {props.navigation.navigate('Messages')}, []) //TO-DO - this is just temporary
    const login = useCallback(() => {props.navigation.navigate('Login')}, []);
    const register = useCallback(() => {props.navigation.navigate('Register')}, []);
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={images.auth.logo} style={styles.imageBackground}>
                <Button onPress={login} text="Kyçu" marginBottom={15} backgroundColor='rgba(255,255,255,0.8)' borderColor='rgba(92, 102, 127, 0.3)' />
                <Button onPress={register} text="Regjistrohu" marginBottom={15} backgroundColor='rgba(255,255,255,0.8)' borderColor='rgba(92, 102, 127, 0.3)' />
                <Button text="Facebook" marginBottom={15} backgroundColor='rgba(255,255,255,0.8)' borderColor='rgba(92, 102, 127, 0.3)' />
                <Button text="Google" backgroundColor='rgba(255,255,255,0.8)' borderColor='rgba(92, 102, 127, 0.3)' />
            </ImageBackground>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Auth);