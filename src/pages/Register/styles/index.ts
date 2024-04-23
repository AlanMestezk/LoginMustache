import { StyleSheet } from "react-native";

export const RegisterStyles = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1E90FF'
        },
        viewTitle:{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30
        },
        img:{
            width: 240,
            height: 100
        },
        title:{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'aliceblue',
            textShadowColor: 'black',
            textShadowOffset: { width: 1, height: 8 }, 
            textShadowRadius: 5, 
            fontFamily: 'Roboto'
        },
        subtitle:{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'aliceblue',
            fontFamily: 'Roboto',
            textShadowColor: 'black',
            textShadowOffset: { width: 1, height: 5 }, 
            textShadowRadius: 5
        },
        viewInput:{
            justifyContent: 'center',
            alignItems: 'center'
        },
        textInput:{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'aliceblue',
            fontFamily: 'Roboto'
        },
        input:{
            width: 300,
            height: 60,
            backgroundColor: 'aliceblue',
            borderRadius: 30,
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            borderWidth: 2,
            borderColor: '#00CED1',
            marginBottom: 20
        },
        showPassBtn:{
            marginTop: -10,
            borderBottomWidth: 1,
            borderColor: 'aliceblue'
        },
        textBtnShowPass:{
            color: 'aliceblue',
            fontWeight:'bold',
            fontSize: 15
        },
        touchButton:{
            flexDirection:'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '40%',
            height: 60,
            backgroundColor: '#00BFFF',
            borderRadius: 40,
            padding: 12,
            borderWidth: 1,
            borderColor: '#20B2AA',
            margin: 20
        },
        textButton:{
            color: 'aliceblue',
            fontSize: 22,
            fontFamily: 'Roboto',
            fontWeight: 'bold'
        },
        imgButton:{
            width: 40, 
            height: 40, 
            marginLeft: 10
        }
    }
)