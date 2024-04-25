import firebase                                                              from '../../data/firebaseConfig'
import { useState }                                                          from "react"
import { useNavigation }                                                     from '@react-navigation/native'
import { RegisterStyles }                                                    from "./styles"
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from "react-native"

const iconMusApp   = require('../../assets/ICONMustache.png')
const iconRegister = require('../../assets/registerIcon.png')

export const Register: React.FC = ()=>{

    const [email,                     setEmail] = useState<string | any>('')
    const [load,                       setLoad] = useState<boolean>(false)
    const [showPass,               setShowPass] = useState<boolean>(false)
    const [password,              setPassaword] = useState<string | any | number>('')
    const [registerSuccess, setRegisterSuccess] = useState <boolean>(false)

    const handleShowPass = ()=>{
        setShowPass(!showPass)
    }


    const handleRegister = async ()=>{

        if(email !== '' && password !== ''){

            setLoad(true)

            await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (value) => {
                    
                    console.log(`Usuáruio criado com sucesso - E-mail: ${value.user?.email}`)
                    setRegisterSuccess(true)
                }
            )
            .catch(

                (error) => {

                    switch (error.code) {

                        case 'auth/weak-password':
                            alert(`Senha muito curta, insira uma com pelo menos 6 caracteres.`);
                            break;

                        case 'auth/invalid-email':
                            alert(`Insira um e-mail válido.`);
                            break;

                        case 'auth/email-already-in-use':
                            alert(`Já existi uma conta com o endereço de email fornecido.`);
                            break;

                        default:
                            console.error(`Não foi possível cadastrar usuário: ${error.message}`);
                            alert('Erro desconhecido ao cadastrar usuário. Por favor, tente novamente mais tarde.');
                            return;

                    }
                }
            )

            setEmail('')
            setPassaword('')
            
            setTimeout(() => {
                setLoad(false);
            }, 1000);

            setTimeout(() => {
                setRegisterSuccess(false);
            }, 15000);

        }else{

            alert('Preencha todos os campos')
        }


    }

    return(

        <View style={RegisterStyles.container}>

            <View style={RegisterStyles.viewTitle}>

                <Image
                    source={iconMusApp}
                    style={RegisterStyles.img}
                />

                <Text style={RegisterStyles.title}>Cadastro</Text>
                
                <Text style={RegisterStyles.subtitle}>Preencha os campos abaixo</Text>

            </View>

            <View style={RegisterStyles.viewInput}>

                <Text style={RegisterStyles.textInput}>E-mail:</Text>
                <TextInput
                    placeholder="digite seu e-mail..."
                    style={RegisterStyles.input} 
                    value={email}
                    onChangeText={(newEmail)=>{setEmail(newEmail)}}
                />

                <Text style={RegisterStyles.textInput}>Password:</Text>
                <TextInput
                    placeholder="digite sua senha..."
                    style={RegisterStyles.input} 
                    secureTextEntry={showPass ? false : true}
                    value={password}
                    onChangeText={(newPassword)=>{setPassaword(newPassword)}}
                />

                <TouchableOpacity style={RegisterStyles.showPassBtn} onPress={handleShowPass}>

                    <Text style={RegisterStyles.textBtnShowPass}>
                        {showPass ? "Ocultar senha" : "Mostrar senha"}
                    </Text>

                </TouchableOpacity>

            </View>

            {

                load ? 
                (
                    <> 

                        <ActivityIndicator size={'large'} color={'#45d3cc'} style={RegisterStyles.load} />
                        <Text style={RegisterStyles.textLoad}>Um momento</Text>
                    </>
                ):
                (
                    <>  

                        {
                            registerSuccess ?
                            (
                                <View style={RegisterStyles.viewMsgm}>  

                                    <Text style={RegisterStyles.msgm}>Cadastro realizado com sucesso</Text>
                                    <Text style={RegisterStyles.msgm}>Vá para o login e acesse a rede</Text>
                                </View>
                            ):
                            (
                                <>
                                
                                </>
                            )

                        }

                        <TouchableOpacity style={RegisterStyles.touchButton} onPress={handleRegister}>
                        
                            <Text style={RegisterStyles.textButton}>Register</Text>
                            
                            <Image
                            source={iconRegister}
                            style={RegisterStyles.imgButton}
                            />

                        </TouchableOpacity>

                    </>
                )

            }


        </View>
    )
}