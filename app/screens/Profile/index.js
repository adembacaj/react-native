import React, { useCallback, useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import images from '../../assets/images';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Gender from '../../components/Gender';

const AddNewPost = (props) => {
    const [gender, setGender] = useState('');
    const { smallLogo, account } = images.profile;

    const maleClick = useCallback(() => {setGender('male')}, [gender]);
    const femaleClick = useCallback(() => {setGender('female')}, [gender]);
    return (
        <View style={styles.container}>
            <Header isProfile icon={smallLogo} />
            <ScrollView style={{ padding: 10 }}>
                <TouchableOpacity activeOpacity={0.8} style={styles.avatar}>
                    <Image source={account} style={styles.account} />
                </TouchableOpacity>
                <Input placeHolder="Emri" />
                <Input placeHolder="Mbiemri" />
                <Input placeHolder="Email" />
                <Input placeHolder="Numri i telefonit" />
                <Input placeHolder="Data e lindjes" />
                <Input placeHolder="Qyteti" />
                <Gender value={gender} maleClick={maleClick} femaleClick={femaleClick} />
                <Button text="RUAJ" marginBottom={10} backgroundColor="rgba(92, 102, 127, 0.1)" borderColor="rgba(92, 102, 127, 0.3)" />
                <Button text="ANULO" backgroundColor="rgba(255, 0, 0, 0.1)" borderColor="rgba(255, 0, 0, 0.3)" isRed={true} />
                <View style={{ height: 50 }} />
            </ScrollView>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPost);