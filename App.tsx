import  React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Entrar } from "./src/pages/Entrar";
import { Login } from './src/pages/Login';

const App = () => {
    return <View style={styles.container}>
        <Login/>
    </View>
}

export default App;