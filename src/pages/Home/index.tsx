import { HomeStyles }                           from "./styles"
import { useNavigation }                        from "@react-navigation/native"
import { View, Text, Button, TouchableOpacity, Image } from "react-native"

const loginIcon = require( "../../assets/loginIcon.png")
const registerIcon = require("../../assets/registerIcon.png")
const iconMusApp = require('../../assets/ICONMustache.png')

export const Home: React.FC = ()=>{

    const navigation : any = useNavigation()

    return(

        <View style={HomeStyles.container}>

            <View style={HomeStyles.viewtitle}>

                <Image
                    source={iconMusApp}
                    style={HomeStyles.img}
                />

                <Text style={HomeStyles.title}>A sua rede social</Text>


            </View>

            <TouchableOpacity style={HomeStyles.touchButton} onPress={()=>{navigation.navigate('Login')}}>

                <Text style={HomeStyles.textButton}>Login</Text>
                
                <Image
                   source={loginIcon}
                   style={HomeStyles.imgButton}
                />


            </TouchableOpacity>

            <TouchableOpacity style={HomeStyles.touchButton} onPress={()=>{navigation.navigate('Register')}}>

                <Text style={HomeStyles.textButton}>Register</Text>

                <Image
                   source={registerIcon}
                   style={HomeStyles.imgButton}
                />

            </TouchableOpacity>


        </View>
    )
}