import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    image: {
        width: "100%",
        height: "100%",
    },

    button: {
        position: "absolute",
        top: "75%",
        width: "85%",
        marginLeft: 30 ,
        backgroundColor: '#1351b4',
        padding: 13,
        borderRadius: 30,
    },

    buttonText: {
        textAlign: "center",
        color: '#f0eff4',
        fontWeight: "normal"
    },

    buttonTextWeight: {
        fontWeight: "bold"
    },

    text: {
        position: "absolute",
        top: "83%",
        width: "85%",
        color: '#6c6c6e',
        fontWeight: "normal",
        marginLeft: 52,
        fontSize: 13
    },

    textWeight: {
        fontWeight: "bold"
    },

    qrCode: {
        width: 30,
        height: 30,
    },

    inLine: {
        position: "absolute",
        top: "90%",
        // flex: 1,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 125,
 
    },

    codeText: {
        color: '#1351b4',
        fontWeight: "bold",
        marginLeft: 6,
        
    }
})