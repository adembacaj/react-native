import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
        height: 50,
        marginBottom: 10,
        flexDirection: 'row',
    },
    left: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    },
    right: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        alignItems: 'center'
    },
    male: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: 'rgba(92, 102, 127, 0.3)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    female: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: 'rgba(92, 102, 127, 0.3)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    maleText: {
        fontSize: 20,
        fontFamily: 'OpenSans-Light',
        lineHeight: 27,
        color: 'rgba(0, 0, 0, 0.2)',
    },
    femaleText: {
        fontSize: 20,
        fontFamily: 'OpenSans-Light',
        lineHeight: 27,
        color: 'rgba(0, 0, 0, 0.2)',
    }
})

export default styles;