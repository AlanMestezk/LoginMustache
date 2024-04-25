import firebase                                                              from '../../data/firebaseConfig'
import { useState }                                                          from "react"
import { LoginStyles }                                                       from './styles'
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from "react-native"
import { useNavigation } from '@react-navigation/native'

const iconMusApp   = require('../../assets/ICONMustache.png')
const iconRegister = require('../../assets/loginIcon.png')

export const Login: React.FC = ()=>{

    const [email,               setEmail] = useState<string | any>('')
    const [load,                 setLoad] = useState<boolean>(false)
    const [showPass,         setShowPass] = useState<boolean>(false)
    const [password,        setPassaword] = useState<string | any | number>('')
    const [loginSuccess, setLoginSuccess] = useState <boolean>(false)

    const handleShowPass = ()=>{
        setShowPass(!showPass)
    }

    const navigation: any = useNavigation();

    const handleLogin = async ()=>{

        if(email !== '' && password !== ""){

            setLoad(true)

            await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(

                (value)=>{

                    console.log(`Login com o e-mail ${value.user?.email} realizado com sucesso`)
                    setLoginSuccess(true)

                    setTimeout(
                        ()=>{

                            navigation.navigate('CameIn');

                        }, 3000
                    )
                }
            )
            .catch(

                (error)=>{


                    switch (error.code) {

                        case 'auth/internal-error':
                            alert(`O e-mail ou senha está incorreto.`);
                            break;

                        case 'auth/invalid-email':
                            alert(`Insira um e-mail válido.`);
                            break;
                        
                        case 'auth/too-many-requests':
                            alert('O acesso a esta conta foi temporariamente desabilitado devido a várias tentativas de login sem sucesso. Você pode restaurá-lo imediatamente redefinindo sua senha ou tentar novamente mais tarde.')
                            break;


                        default:
                            console.log(`Ops, deu erro >> ${error.code}: ${error.message}`);
                            alert(`Ocorreu um erro, tente novamente mais tarde.`);
                            break;
                    }
                }
            )

            setEmail('')
            setPassaword('')

            setTimeout(() => {
                setLoad(false);
            }, 2000);

            setTimeout(() => {
                setLoginSuccess(false);
            }, 10000);


        }else{
            alert('Preencha todos os campos!')
        }

        
    }

    return(

        <View style={LoginStyles.container}>

            <View style={LoginStyles.viewTitle}>

                <Image
                    source={iconMusApp}
                    style={LoginStyles.img}
                />

                <Text style={LoginStyles.title}>Login</Text>
                
                <Text style={LoginStyles.subtitle}>Preencha os campos abaixo</Text>

            </View>

            <View style={LoginStyles.viewInput}>

                <Text style={LoginStyles.textInput}>E-mail:</Text>
                <TextInput
                    placeholder="digite seu e-mail..."
                    style={LoginStyles.input}
                    value={email}
                    onChangeText={(newEmail)=>{setEmail(newEmail)}}
                />

                <Text style={LoginStyles.textInput}>Password:</Text>
                <TextInput
                    placeholder="digite sua senha..."
                    style={LoginStyles.input}
                    secureTextEntry={showPass ? false : true}
                    value={password}
                    onChangeText={(newPassword)=>{setPassaword(newPassword)}}
                />

                <TouchableOpacity onPress={handleShowPass} style={LoginStyles.showPassBtn}>

                    <Text style={LoginStyles.textBtnShowPass}>
                        {showPass ? "Ocultar senha" : "Mostrar senha"}
                    </Text>

                </TouchableOpacity>

            </View>

            {

                load ?
                (
                    <>

                        <ActivityIndicator size={'large'} color={'#45d3cc'} style={LoginStyles.load} />
                        <Text style={LoginStyles.textLoad}>Um momento</Text>
                    
                    </>
                ):
                (   
                    
                    <>

                       {
                            loginSuccess ?
                            (
                                <View style={LoginStyles.viewMsgm}>  

                                    <Text style={LoginStyles.msgm}>Login efetuado com sucesso</Text>
                                    <Text style={LoginStyles.msgm}>Bem vindo</Text>
                                </View>
                            ):
                            (
                                <>
                                
                                </>
                            )

                        }

                        <TouchableOpacity style={LoginStyles.touchButton} onPress={handleLogin  }>
                            
                            <Text style={LoginStyles.textButton}>Login</Text>
                                
                            <Image
                            source={iconRegister}
                            style={LoginStyles.imgButton}
                            />
        
                         </TouchableOpacity>

                    </>
                )

            }


        </View>
    )
}