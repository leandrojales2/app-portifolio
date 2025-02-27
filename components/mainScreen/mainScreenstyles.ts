import { StyleSheet } from 'react-native';
import BackgroundScreen from '../backgroundScreen/BackgroundScreen';

const mainScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        width: '90%',
        height: '90%',
        position: 'absolute',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        padding: 15,
    },
    containerImage: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{ 
        width: '40%', 
        height: '90%',
        position: 'relative',
        borderRadius: '50%', 
    },
    name: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
    },
    description: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 10,
    },
    containerIcon: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewIcon: {
        width: '35%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageIcon: {
        width: 45,
        height: 45,
    },
    iconLinkedin: {
        width: 60,
        height: 60,

    },
    iconEmail: {
        width: 50,
        height: 50,
    },
    containerButton: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '65%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },

});

export default mainScreenStyles;