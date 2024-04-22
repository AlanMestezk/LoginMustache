import { View, Text } from "react-native"
import { RegisterStyles } from "./styles"

export const Register: React.FC = ()=>{

    return(

        <View style={RegisterStyles.container}>

            <Text style={RegisterStyles.title}>Register</Text>

        </View>
    )
}