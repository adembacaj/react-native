import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: 'rgba(92, 102, 127, 0.03)',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(92, 102, 127, 0.3)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    left: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middle: {
        flex: 0.6,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    right: {
        flex: 0.2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: 18
    },
    avatar: {
        width: 40,
        height: 40
    },
    middleTitle: {
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'OpenSans-Bold',
        color: '#5C667F'
    },
    middleSubtitle: {
        fontSize: 10,
        lineHeight: 14,
        fontFamily: 'OpenSans-Light',
        color: 'rgba(92, 102, 127, 0.4)',
        marginTop: 3
    },
    rightDate: {
        fontSize: 10,
        lineHeight: 14,
        fontFamily: 'OpenSans-Light',
        color: 'rgba(92, 102, 127, 0.4)'
    }
})

export default styles;