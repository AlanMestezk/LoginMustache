import { View, Text } from "react-native"
import { LoginStyles } from "./styles"

export const Login: React.FC = ()=>{

    return(

        <View style={LoginStyles.container}>

            <Text style={LoginStyles.title}>Login</Text>

        </View>
    )
}