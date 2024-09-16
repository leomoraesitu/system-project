import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.colors.lightGray,
        borderColor:themas.colors.lightGray
    },
    input:{
        height:'100%',
        width:'90%',
        //backgroundColor:'red',
        borderRadius:40,
        paddingLeft:5
    },
    titleInput:{
        marginLeft:5,
        marginTop:20,
        color:themas.colors.gray
    },
    Icon:{
        width:'100%'
    },
    button:{
        width:'10%'        
    },
})