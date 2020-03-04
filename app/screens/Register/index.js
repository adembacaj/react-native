import React, { useCallback, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import images from '../../assets/images';
//components
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Gender from '../../components/Gender';

const Register = (props) => {
    const [gender, setGender] = useState('');
    
    const back = useCallback(() => { props.navigation.goBack() }, []);
    const forgot = useCallback(() => {props.navigation.navigate('Forgot')}, []);
    const login = useCallback(() => {props.navigation.navigate('Login')}, []);
    const maleClick = useCallback(() => {setGender('male')}, [gender]);
    const femaleClick = useCallback(() => {setGender('female')}, [gender]);
    return (
        <View style={styles.container}>
            <Header back={back} title="Register" />
            <ScrollView contentContainerStyle={styles.scrollview} style={styles.wrapper}>
                <Image style={styles.icon} source={images.register} />
                <Input placeHolder="Emri" />
                <Input placeHolder="Mbiemri" />
                <Input placeHolder="Email" />
                <Input placeHolder="Numri i telefonit" />
                <Input placeHolder="Data e lindjes" />
                <Input placeHolder="Qyteti" />
                <Gender value={gender} maleClick={maleClick} femaleClick={femaleClick} />
                <Input placeHolder="Fjalekalimi" />
                <Input placeHolder="Perserit fjalekalimin" />
                <Button text="Regjistrohu" backgroundColor="rgba(92, 102, 127, 0.1)" borderColor="rgba(92, 102, 127, 0.3)" />
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={login} style={styles.left} activeOpacity={0.6}>
                        <Text style={styles.forgotText}>Kyçu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={forgot} style={styles.right} activeOpacity={0.6}>
                        <Text style={styles.forgotText}>Rikthe fjalekalimin</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Register);