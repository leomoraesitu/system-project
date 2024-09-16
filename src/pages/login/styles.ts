import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        //backgroundColor: 'green',
        paddingHorizontal:37        
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor: 'blue',
        alignItems: 'center',
       //justifyContent:'center'
    },
    logo:{
        height:80,
        width:80
    },
    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:18
    },  
    textBotton:{
        fontSize:16,
        color:themas.colors.gray
    },
   
})