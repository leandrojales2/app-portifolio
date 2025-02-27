import { StyleSheet } from 'react-native';

const mainScreenStyles = StyleSheet.create({
    
    image:{ 
        width: '100%', 
        height: '50%', 

    },
    imageInverted: {
        width: '100%',  
        height: '50%',
        transform: [{ rotate: '180deg' }]
    }
});

export default mainScreenStyles;