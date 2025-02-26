import React from 'react';
import { Linking } from 'react-native';
import { Image, TouchableOpacity, Text, View } from 'react-native';

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
        </View>
    );
};
