import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(92, 102, 127, 0.3)',
        backgroundColor: '#FDFEFF',
        flexDirection: 'row'
    },
    left: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middle: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    right: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    attach: {
        width: 25,
        height: 25,
    },
    send: {
        width: 20,
        height: 20
    },
    textInput: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        color: 'rgba(92, 102, 127, 0.3)',
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'OpenSans-Light',
        paddingTop: 'auto',
        paddingBottom: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    }
})

export default styles;