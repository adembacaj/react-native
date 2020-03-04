import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#5C667F',
        borderBottomWidth: 1,
        borderBottomColor: '#F4F4F4',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {
        flex: 0.1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    middle: {
        flex: 0.8,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        flex: 0.1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        width: 25,
        height: 25
    },
    middleText: {
        fontSize: 20,
        lineHeight: 34,
        color: '#ffffff',
        fontFamily: 'OpenSans-Light'
    },
    headerIcon: {
        width: 30,
        height: 30
    }
})

export default styles;