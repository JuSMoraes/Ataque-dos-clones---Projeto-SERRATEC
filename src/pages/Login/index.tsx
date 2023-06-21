import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../Login/styles';

import back from '../../assets/back.png';
import logo from '../../assets/logo.png';
import altoContraste from '../../assets/altoContraste.png';
import vLibras from '../../assets/vLibras.png';
import id from '../../assets/id.png';
import bancoBrasil from '../../assets/bancoBrasil.png';
import cloud from '../../assets/cloud.png';

export const Login = () => {
    return <View style={styles.background}>
        <View style={styles.topBox}>
            <View style={styles.col1}>
                <TouchableOpacity>
                    <Image
                        source={back}
                        style={styles.arrow}/>
                </TouchableOpacity>
                <Text style={styles.title}>Autenticação</Text>
            </View>

            <View style={styles.col2}>
                <Image source={logo} style={styles.logo}/>
                <Image source={altoContraste} style={styles.symbols}/>
                <Text style={styles.fontSize}>Alto Contraste</Text>
                <Image source={vLibras} style={styles.symbols}/>
                <Text style={styles.fontSize}>VLibras</Text>
            </View>
        </View>
            
        <View style={styles.centralBox}>
            <Text style={styles.principalTitle}>Acesse sua conta com</Text>          
            <View style={styles.col3}>
                <Image source={id} style={styles.idImage}/>
                <Text>Número do CPF</Text>
            </View>
            <Text style={styles.text2}>Caso não lembre se possui uma conta, digite o número do seu CPF mesmo assim para verificar</Text>
            <Text style={styles.cpf}>CPF</Text> 
            <TextInput style={styles.input} placeholder="Digite seu CPF" keyboardType="numeric"/>

            <View style={styles.col4}>
                <TouchableOpacity style={styles.btnCreate}>
                    <Text style={styles.textCreate}>Crie sua conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGo}>
                    <Text style={styles.textGo}>Avançar</Text>
                </TouchableOpacity>
            </View >

            <View style={styles.colBrasil}>
                <Image source={bancoBrasil} style={styles.bancoImage}/>
                <Text style={styles.bancoText}>Banco do Brasil</Text>
            </View>

            <View style={styles.colNuvem}>
            <Image source={cloud} style={styles.nuvemImage}/>
            <Text style={styles.bancoText}>Certificado digital em nuvem</Text>
            </View>
        </View>
        <Text style={styles.link}>Dúvidas Frequentes</Text>
    </View>
}