import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login(){
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
                <Text style={style.titleInput}>ENDEREÇO DE EMAIL:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                    />             
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                
                <Text style={style.titleInput}>SENHA:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                    />             
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>                
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textBotton}>Faça seu cadastro 
                <Text style={{color:themas.colors.primary}}> aqui!</Text>
            </Text>
        </View>
    )
}