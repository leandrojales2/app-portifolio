import React from 'react';
import { Linking } from 'react-native';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import skillScreenStyles from './skillScreenStyles';

export default function MainScreen() {
    return (
        <View style={skillScreenStyles.main}>
            <View style={skillScreenStyles.containerImage}>
                <Image
                    source={require('../../assets/photo.jpg')}
                    style={skillScreenStyles.image}
                />
            </View>
            <Text style={skillScreenStyles.text}>
                Habilidades
            </Text>
            <View style={skillScreenStyles.container}>
                <View>
                    <Text style={skillScreenStyles.textStar}>HTML</Text>
                    <Text style={skillScreenStyles.textStar}>CSS</Text>
                    <Text style={skillScreenStyles.textStar}>JAVASCRIPT</Text>
                    <Text style={skillScreenStyles.textStar}>REACT</Text>
                    <Text style={skillScreenStyles.textStar}>REACT NATIVE</Text>
                </View>
                <View>
                    <View style={skillScreenStyles.containerAbility}>        
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrela.png')}
                            style={skillScreenStyles.star}
                        />
                    </View>
                    <View style={skillScreenStyles.containerAbility}>
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrela.png')}
                            style={skillScreenStyles.star}
                        />
                    </View>
                    <View style={skillScreenStyles.containerAbility}>
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrela.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrela.png')}
                            style={skillScreenStyles.star}
                        />
                    </View>
                    <View style={skillScreenStyles.containerAbility}>
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrela.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrela.png')}
                            style={skillScreenStyles.star}
                        />
                    </View>
                    <View style={skillScreenStyles.containerAbility}>
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrelaPreenchida.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrela.png')}
                            style={skillScreenStyles.star}
                        />
                        <Image
                            source={require('../../assets/estrela.png')}
                            style={skillScreenStyles.star}
                        />
                    </View>
                </View>
            </View>
            <View style={skillScreenStyles.containerButton} >
                <LinearGradient colors={['#7bb7d5', '#489ec9', '#0e74a7']} style={skillScreenStyles.button}>
                    <TouchableOpacity
                        style={skillScreenStyles.button}
                        onPress={() => Linking.openURL('https://example.com')}
                    >
                        <Text style={skillScreenStyles.buttonText}>Fale Comigo</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    );
};
