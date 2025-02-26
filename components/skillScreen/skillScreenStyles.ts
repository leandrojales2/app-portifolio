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
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
    }
});

export default mainScreenStyles;