
import {createAppContainer, SceneView} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../component/Home'
import Splash from '../component/Splash'
import Dzikir from '../component/Dzikir'
import Jadwal from '../component/Jadwal'
import Husna from '../component/Husna'
import Screen from '../component/Screen'


const ro = createStackNavigator (
    {
        Splash:{
            screen:Splash,
            navigationOptions:{
                title:'Pilihan'
            }
        },
        Home:{
            screen:Home,
            navigationOptions:{
                title:'HayDakwah'
            }
        },
        Dzikir:{
            screen:Dzikir,
            navigationOptions:{
                title:'Dzikir'
            }
        },
        Jadwal:{
            screen:Jadwal,
            navigationOptions:{
                title:'Jadwal'
            }
        },
        Husna:{
            screen:Husna,
            navigationOptions:{
                title:'Asma ul Husna'
            }
        },
        Screen:{
            screen:Screen
        }
    }
)
export default createAppContainer(ro)