import { color } from "@rneui/base";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    topBox: {
        width: 400,
        height: 125,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 6,
        zIndex: 1
    },

    centralBox:{
        margin: 20 ,
        width: 320,
        height: 425,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
    },

    background: {
        height: '100%',
        backgroundColor: '#eef0f2'
    },

    arrow: {
        marginLeft: 20,
        tintColor: '#1351b4' ,
    },

    title: {
        marginLeft: 85,
        fontSize: 20
    },

    col1: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        height: '50%',
        
    },

    col2: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginTop: 10
    },

    col3: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginTop: 40
    },

    col4: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',

    },

    logo: {
        width: 115,
        height: 41,
        marginLeft: 10,
        marginRight: 45
    },

    symbols: {
        width: 13,
        height: 13,
        marginRight: 2,
        marginLeft: 13
    },

    fontSize: {
        fontSize: 12
    },

    principalTitle: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },

    idImage: {
        margin: 10,
        width: 25,
        height: 15,
        tintColor:'#1351b4',
    },

    input: {
        height: 40,
        marginLeft: 15,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 3,
        borderColor: '#6c6c6e',
        borderWidth: 1,
        paddingLeft: 20
    },

    text2: {
        fontSize: 13,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 30,
    },

    cpf: {
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 8
    },

    btnCreate: {
        backgroundColor: 'white',
        marginLeft: 25,
        marginTop: 30,
        borderWidth: 2,
        width: 125,
        padding: 13,
        borderRadius: 30,
        borderColor: '#1351b4'
    },

    textCreate: {
        textAlign: 'center',
        color: '#1351b4',
        fontWeight: 'bold'
    },

    btnGo: {
        backgroundColor: '#1351b4',
        marginTop: 30,
        marginLeft: 20,
        width: 125,
        padding: 13,
        borderRadius: 30,
    },

    textGo: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    colBrasil: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },

    colNuvem: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },

    bancoImage: {
        height: 25,
        width: 25,
        marginLeft: 10,
        marginTop: 20,
    },

    nuvemImage: {
        height: 25,
        width: 25,
        marginLeft: 10,
        marginTop: 20,
        tintColor: "#1351b4"
    },

    bancoText: {
        marginTop: 20,
        marginLeft: 10,
    },

    link: {
        marginLeft: 120,
        color: '#1351b4',
        textDecorationLine: 'underline',
        textDecorationColor: '#1351b4'
    }

})