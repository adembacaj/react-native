import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    button: {
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        paddingLeft: 25,
        backgroundColor: 'rgba(92, 102, 127, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(92, 102, 127, 0.3)',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'OpenSans-Light',
        color: '#5C667F'
    },
    buttonIcon: {
        width: 25,
        height: 25,
        marginRight: 15
    }
})

export default styles;