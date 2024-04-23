import { Home }                     from '../pages/Home'
import { Login }                    from '../pages/Login'
import { Register }                 from '../pages/Register'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const Routes: React.FC = ()=>{

    return(

        <Stack.Navigator>

            <Stack.Screen
                name="Home"
                component={Home}
                options={
                    {
                        headerShown: false
                    }
                }
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />
            
            <Stack.Screen
                name="Register"
                component={Register}
                options={
                    {
                        title: 'Cadastro',
                        headerStyle:{
                            backgroundColor: '#1a6fc4',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 22
                        },
                        animation: 'slide_from_right'
                    }
                }
            />

        </Stack.Navigator>

    )
}