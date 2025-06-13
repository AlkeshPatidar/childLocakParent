import React from "react";
import { View } from "react-native";


const DownLine=({bgColor})=>{
    return(
        <View style={{
            height:5,
            width:148,
            backgroundColor:bgColor,
            borderRadius:15,
            position:'absolute',
            bottom:10,
            alignSelf:'center'
        }}>

        </View>
    )
}

export default DownLine;