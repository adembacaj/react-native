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
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 5
    },
    right: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingsIcon: {
        width: 25,
        height: 25
    },
    searchIcon: {
        width: 15,
        height: 15,
        marginRight: 10
    },
    search: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        height: 30,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(92, 102, 127, 0.3)'
    },
    input: {
        fontSize: 13,
        lineHeight: 18,
        color: 'rgba(64, 64, 64, 0.2)'
    }
})

export default styles;