import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    bigIcon: {
        width: '100%',
        height: 182.5,
    },
    icons: {
        width: 80,
        height: 40,
        marginRight: 5
    },
    flatList: {
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(92, 102, 127, 0.05)',
        borderWidth: 0.5,
        borderColor: 'rgba(92, 102, 127, 0.3)',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    flatListContent: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;