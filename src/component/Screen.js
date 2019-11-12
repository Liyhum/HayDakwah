import React from 'react';
import {View,TextInput,Text,DrawerLayoutAndroid} from 'react-native'
import Panel from 'react-native-panel'

class routes extends React.Component {
    render() {
         const navigationView=(
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
         )
        return (
            <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}
            >
                <View>
                    <Text>Hello</Text>
                    <Text>World</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

export default routes;