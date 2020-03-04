import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 10,
    },
    item: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'rgba(92, 102, 127, 0.3)',
        flexDirection: 'column',
        marginBottom: 20
    },
    car: {
        width: '100%',
        height: 150,
    },
    carFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 20,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        alignItems: 'center'
    },
    carFooterLeft: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 5,
    },
    carFooterRight: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 5,
    },
    name: {
        fontSize: 10,
        lineHeight: 11,
        fontFamily: 'OpenSans-Bold',
        color: '#ffffff',
    },
    day: {
        fontSize: 10,
        lineHeight: 11,
        fontFamily: 'OpenSans-Bold',
        color: '#ffffff',
    },
    middle: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        height: 100
    },
    middleLeft: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    middleRight: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    middleItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    middleIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    middleText: {
        fontSize: 12,
        lineHeight: 17,
        color: '#5C667F',
        fontFamily: 'OpenSans-Light'
    },
    footer: {
        width: '100%',
        height: 30,
        backgroundColor: 'rgba(92, 102, 127, 0.05)',
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(92, 102, 127, 0.3)',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    footerLeft: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    footerRight: {
        flex: 0.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    footerIcon: {
        width: 15,
        height: 15,
        marginRight: 10
    },
    location: {
        fontSize: 15,
        lineHeight: 20,
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'OpenSans-Bold'
    },
    price: {
        fontSize: 15,
        lineHeight: 20,
        color: 'rgba(255, 0, 0, 0.5)',
        fontFamily: 'OpenSans-Bold'
    }
})

export default styles;