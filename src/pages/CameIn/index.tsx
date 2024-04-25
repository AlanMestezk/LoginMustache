import { useNavigation }                from "@react-navigation/native";
import { CamiInStyles }                 from "./styles"
import { View, Text, TouchableOpacity } from "react-native"

export const CameIn: React.FC = () =>{

    const navigation: any = useNavigation();

    return(

        <View style={CamiInStyles.container}>

            <Text style={CamiInStyles.title}>Bem vindo!</Text>

            <TouchableOpacity style={CamiInStyles.touchButton} onPress={()=>{navigation.navigate('Home')}}>

                <Text style={CamiInStyles.textButton}>Sair</Text>

            </TouchableOpacity>

        </View>

    )

}