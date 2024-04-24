import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create(
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
            width: 230,
            height: 95
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
            width: '30%',
            height: 60,
            backgroundColor: '#0000FF',
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
        },
        load:{
            marginTop: 20
        },
        textLoad:{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'aliceblue'
        },
        viewMsgm:{
            width: 300,
            height: 70, 
            backgroundColor:'#3CB371',
            borderRadius: 30,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12,
            marginTop: 20
        },
        msgm:{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'aliceblue'
        }
    }
)