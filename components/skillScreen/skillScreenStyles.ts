import { StyleSheet } from 'react-native';

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
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        marginBottom: 20,
    },
    hability: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        alignItems: 'flex-start',   

    },
    textStar: {
        color: 'white',
        fontSize: 14,
        textAlign: 'left',
        padding: 5,
    },
    containerAbility: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 1,
    },
    star:{ 
        width: 27, 
        height: 27,
        position: 'relative', 
    },
    containerButton: {
        width: '100%',
        height: '30%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
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