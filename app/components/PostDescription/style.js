import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: 'rgba(92, 102, 127, 0.3)',
        borderRadius: 10
    },
    title: {
        width: '100%',
        height: 30,
        backgroundColor: 'rgba(92, 102, 127, 0.05)',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(92, 102, 127, 0.3)',
        justifyContent: 'center',
        paddingLeft: 10
    },
    titleText: {
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'OpenSans-Light',
        color: '#5C667F'
    },
    description: {
        width: '100%',
        padding: 10
    },
    descriptionText: {
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'OpenSans-Light',
        color: '#5C667F'
    }
})

export default styles;