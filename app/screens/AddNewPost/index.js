import React, { useCallback } from 'react';
import { View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import images from '../../assets/images';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const AddNewPost = (props) => {
    const {smallLogo, addNewPost} = images.addNewPost;
    return (
        <View style={styles.container}>
            <Header icon={smallLogo} />
            <ScrollView style={{padding: 10}}>
                <TouchableOpacity activeOpacity={0.8} style={styles.add}>
                    <Image style={styles.addIcon} source={addNewPost} />
                </TouchableOpacity>
                <Input placeHolder="Marka" />
                <Input placeHolder="Modeli" />
                <Input placeHolder="Viti" />
                <Input placeHolder="Marshi" />
                <Input placeHolder="Targat" />
                <Input placeHolder="Numri i dyerve" />
                <Input placeHolder="Numri i uleseve" />
                <Input placeHolder="Ngjyra" />
                <TextInput multiline={true} style={styles.description} placeholder="Përshkrimi" />
                <Input placeHolder="Çmimi" />
                <Button text="POSTO" marginBottom={10} backgroundColor="rgba(92, 102, 127, 0.1)" borderColor="rgba(92, 102, 127, 0.3)" />
                <Button text="ANULO" backgroundColor="rgba(255, 0, 0, 0.1)" borderColor="rgba(255, 0, 0, 0.3)" isRed={true} />
                <View style={{height: 50}} />
            </ScrollView>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPost);