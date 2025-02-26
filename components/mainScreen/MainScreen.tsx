import React from 'react';
import { Linking } from 'react-native';
import { Image, TouchableOpacity, Text, View } from 'react-native';

import mainScreenStyles from './mainScreenstyles';

export default function MainScreen() {
    return (
        <View style={mainScreenStyles.main}>
            <View style={mainScreenStyles.containerImage}>
                <Image
                    source={require('../../assets/photo.jpg')}
                    style={mainScreenStyles.image}
                />
            </View>
            <Text style={mainScreenStyles.name}>
                Leandro Jales
            </Text>
            <Text style={mainScreenStyles.description}>
                Desenvolvedor de soluções em Excel com mais de 10 anos de experiência em automação de processos e criação de sistemas de gestão empresarial. Desenvolvedor em JavaScript, React.js, Python, Excel e Power BI.
            </Text>
            <View style={mainScreenStyles.containerIcon}>
                <TouchableOpacity
                    style={mainScreenStyles.viewIcon}
                    onPress={() => {
                        Linking.openURL('https://github.com/leandrojales2');
                    }}
                >
                    <Image
                        source={require('../../assets/github.svg')}
                        style={mainScreenStyles.imageIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={mainScreenStyles.viewIcon} 
                    onPress={() => {
                        Linking.openURL('https://www.linkedin.com/in/lcjales/');
                    }}>
                    <Image
                        source={require('../../assets/linkedin.png')}
                        style={mainScreenStyles.iconLinkedin}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={mainScreenStyles.viewIcon} 
                    onPress={() => {
                        Linking.openURL('mailto:desenvolvedorjales@yahoo.com');
                    }} >
                    <Image
                        source={require('../../assets/email.png')}
                        style={mainScreenStyles.iconEmail}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
