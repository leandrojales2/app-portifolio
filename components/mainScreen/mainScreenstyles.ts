import { StyleSheet } from 'react-native';

const mainScreenStyles = StyleSheet.create({
    main: {
        width: '80%',
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
        width: '50%', 
        height: '100%',
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
        height: '40%',
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
    }

});

export default mainScreenStyles;