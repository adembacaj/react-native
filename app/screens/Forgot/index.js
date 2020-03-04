import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import images from '../../assets/images';
//components
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Forgot = (props) => {
    const back = useCallback(() => { props.navigation.goBack() }, []);
    const login = useCallback(() => { props.navigation.navigate('Login') }, []);
    const register = useCallback(() => { props.navigation.navigate('Register') }, []);
    return (
        <View style={styles.container}>
            <Header back={back} title="Forgot" />
            <View style={styles.wrapper}>
                <Image style={styles.icon} source={images.forgot} />
                <Input placeHolder="Email" />
                <Button text="Rikthe" backgroundColor="rgba(92, 102, 127, 0.1)" borderColor="rgba(92, 102, 127, 0.3)" />
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={login} style={styles.left} activeOpacity={0.6}>
                        <Text style={styles.forgotText}>Kyçu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={register} style={styles.right} activeOpacity={0.6}>
                        <Text style={styles.forgotText}>Regjistrohu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);