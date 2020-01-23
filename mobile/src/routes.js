import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import main from './pages/main';
import profile from './pages/profile'

const Routes = createAppContainer(
    createStackNavigator({
        main:{
            screen: main,
            navigationOptions:{
                title: 'DevRadar'
            },
        },
        profile: {
            screen: profile,
            navigationOptions:{
                title: 'Perfil no Github'
            }
        },
    }, {
        defaultNavigationOptions:{
            headerTintColor:'#fff',
            headerBackTitleVisible: false,
            headerStyle:{
                backgroundColor: '#7d40e7',

            }
        },
    })
);

export default Routes;