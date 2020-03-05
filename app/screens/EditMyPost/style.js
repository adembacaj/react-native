import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    add: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(92, 102, 127, 0.3)',
        borderRadius: 5,
        borderStyle: 'dashed',
        marginBottom: 20
    },
    addIcon: {
        width: 100,
        height: 100
    },
    description: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'rgba(92, 102, 127, 0.3)',
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingRight: 20,
        borderRadius: 5,
        height: 150,
        fontSize: 20,
        lineHeight: 27,
        fontFamily: 'OpenSans-Light',
        color: 'rgba(92, 102, 127, 0.8)',
        marginBottom: 10
    }
})

export default styles;