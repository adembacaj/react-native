import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        marginTop: 10,
        padding: 10,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        marginBottom: 10
    },
    left: {
        flex: 0.5,
        alignItems: 'flex-start',

    },
    right: {
        flex: 0.5,
        alignItems: 'flex-end'
    },
    item: {
        width: '95%',
        height: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        marginBottom: 10
    },
    text: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'OpenSans-Light',
        color: '#5C667F'
    }
})

export default styles;