import { ImageBackground, View } from "react-native"
import CustomText from "../../components/TextComponent"
import IMG from "../../assets/Images"
import { App_Primary_color } from "../../common/Colors/colors"
import { useEffect } from "react"

const Splash=({navigation})=>{

    useEffect(()=>{
        setTimeout(()=>{
        navigation.navigate('Login')

        },3000)
    },[])

    return(
       <ImageBackground source={IMG.SplashScreen}
       style={{
        flex:1,
        backgroundColor:App_Primary_color
       }}
       >

       </ImageBackground>
    )
}

export default Splash