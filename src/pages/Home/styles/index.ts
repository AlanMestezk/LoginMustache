import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4169E1'
        },
        viewtitle:{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50,
            
        },
        title:{
            fontSize: 20,
            fontFamily: 'Roboto', // Substitua 'Roboto' pela fonte desejada
            marginBottom: 5,
            fontWeight: 'bold',
            color: 'aliceblue',
            textShadowColor: 'black', // Cor do contorno
            textShadowOffset: { width: 5, height: 5 }, // Tamanho do contorno
            textShadowRadius: 3, // Raio do contorno
        },
        img:{
            width: 300,
            height: 122,
            margin: 20
        },
        touchButton:{
            backgroundColor:'#000080',
            width: '55%',
            height: 70,
            margin: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 40,
            padding: 10,
            borderColor: '#008B8B',
            borderWidth: 2
        },
        textButton:{
            color: 'aliceblue',
            fontWeight:'bold',
            fontSize: 25,
            textShadowColor: 'black', // Cor do contorno
            textShadowOffset: { width: 5, height: 5 }, // Tamanho do contorno
            textShadowRadius: 3, // Raio do contorno
        },
        imgButton:{
            width: 50,
            height: 50
        }
    }
)