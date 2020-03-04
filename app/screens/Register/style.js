import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255, 0.9)',
    },
    wrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10     
    },
    scrollview: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    icon: {
        width: 200,
        height: 200,
        marginTop: 20,
        marginBottom: 30
    },
    forgot: {
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 10
    },
    forgotText: {
        fontSize: 12,
        lineHeight: 17,
        color: '#5C667F',
        fontFamily: 'OpenSans-Light'
    },
    bottom: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    left: {
        flex: 0.5,
        width: '100%',
        alignItems: 'flex-start'
    },
    right: {
        flex: 0.5,
        width: '100%',
        alignItems: 'flex-end'
    },
})

export default styles;