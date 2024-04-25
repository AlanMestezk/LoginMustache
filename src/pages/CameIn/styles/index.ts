import { StyleSheet } from "react-native";

export const CamiInStyles = StyleSheet.create(
    {
        container:{

            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        title:{
            fontSize: 30,
            fontWeight: 'bold'
        },
        touchButton:{
            backgroundColor: '#00008B',
            width: '40%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            borderRadius: 30
        },
        textButton:{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'aliceblue'
        }
    }
)