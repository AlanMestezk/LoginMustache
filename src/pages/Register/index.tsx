import { useState }                                       from "react"
import { RegisterStyles }                                 from "./styles"
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native"

const iconMusApp   = require('../../assets/ICONMustache.png')
const iconRegister = require('../../assets/registerIcon.png')

export const Register: React.FC = ()=>{

    const [email,        setEmail] = useState<string | any>('')
    const [password, setPassaword] = useState<string | any | number>('')
    const [showPass,  setShowPass] = useState<boolean>(false)

    const handleShowPass = ()=>{
        setShowPass(!showPass)
    }

    const handleRegister = ()=>{

        if(email !== '' && password !== ''){
            alert(`E-mail ${email} registrado com sucesso`)

            setEmail('')
            setPassaword('')
        }else{

            alert('Preencha todos os campos')
            return
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

            <TouchableOpacity style={RegisterStyles.touchButton} onPress={handleRegister}>
                
                <Text style={RegisterStyles.textButton}>Register</Text>
                
                <Image
                   source={iconRegister}
                   style={RegisterStyles.imgButton}
                />

            </TouchableOpacity>

        </View>
    )
}