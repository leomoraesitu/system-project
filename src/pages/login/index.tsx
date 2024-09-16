import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons,Octicons} from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

export default function Login(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[showPassword, setShowPassword] = useState(true);
    const [loading,setLoading]           = useState(false);

    async function getLogin(){
        try {
            if(!email || !password){
                return Alert.alert('Atenção','Informe o Email e a Senha')
            }
            Alert.alert('Logado com sucesso')

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo!</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE EMAIL:"
                    IconRight={MaterialIcons}
                    iconRightName="email"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA:"
                    IconRight={Octicons}
                    iconRightName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={()=>setShowPassword(!showPassword)}
                />
               
            </View>
            <View style={style.boxBottom}>
                <Button
                
                text= "ENTRAR"
                loading={loading}
                onPress={()=>getLogin()}                
                />
            </View>
            <Text style={style.textBotton}>Faça seu cadastro 
                <Text style={{color:themas.colors.primary}}> aqui!</Text>
            </Text>
        </View>
    )
}