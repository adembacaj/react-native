import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';
import images from '../../assets/images';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel'
;
const EditMyPost = (props) => {
    const [data, setData] = useState([])
    const {smallLogo, addNewPost} = images.addNewPost;
    const back = useCallback(() => {props.navigation.goBack()}, []);
    useEffect(() => { setData(props.route.params.item) }, [props]);
    return (
        <View style={styles.container}>
            <Header back={back} icon={smallLogo} />
            <ScrollView style={{padding: 10}}>
                <Carousel bigIcon={data.icon} />
                <Input value={data.marka} placeHolder="Marka" />
                <Input value={data.modeli} placeHolder="Modeli" />
                <Input value={data.motori} placeHolder="Motori" />
                <Input value={data.viti} placeHolder="Viti" />
                <Input value={data.marshi} placeHolder="Marshi" />
                <Input value={data.targat} placeHolder="Targat" />
                <Input value={data.dyer} placeHolder="Numri i dyerve" />
                <Input value={data.seats} placeHolder="Numri i uleseve" />
                <Input value={data.ngjyra} placeHolder="Ngjyra" />
                <TextInput multiline={true} style={styles.description} placeholder="Përshkrimi" />
                <Input value={data.price} placeHolder="Çmimi" />
                <Button text="EDITO" marginBottom={10} backgroundColor="rgba(92, 102, 127, 0.1)" borderColor="rgba(92, 102, 127, 0.3)" />
                <Button text="FSHIJ" backgroundColor="rgba(255, 0, 0, 0.1)" borderColor="rgba(255, 0, 0, 0.3)" isRed={true} />
                <View style={{height: 50}} />
            </ScrollView>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(EditMyPost);