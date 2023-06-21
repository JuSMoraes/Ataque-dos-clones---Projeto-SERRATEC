import React from 'react';
import { View , Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../../../src/pages/Entrar/styles';

import fundoLogin from '../../assets/fundoLogin.png';
import qrCode from '../../assets/qrCode.png';

export const Entrar = () => {
    return <View>
        <View>

        <ImageBackground style={styles.image} source={fundoLogin}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar com <Text style={styles.buttonTextWeight}>gov.br</Text></Text>
        </TouchableOpacity>

        <Text style={styles.text}>Clique para<Text style={styles.textWeight}> criar </Text>
         ou <Text style={styles.textWeight}>acessar </Text>
        sua conta gov.br</Text>
        </View>

        <View style={styles.inLine}>
          <Image style={styles.qrCode} source={qrCode}/>
          <Text style={styles.codeText}>Ler QR Code</Text>
        </View>

        
        
    </View>
}