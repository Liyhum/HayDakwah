import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import Home from './Home'

class Splash extends React.Component {
    render() {
        return (
            <View style={{paddingHorizontal:15,marginTop:250}}>
               <TouchableOpacity style={{borderColor:'#ccc',borderRadius:10,borderWidth:5,padding:20,marginVertical:10,alignItems:'center'}}
               onPress ={()=> this.props.navigation.navigate('Home')}
               >

                    <Text style={{color:'#ccc'}}>Tugas Bang Wandi</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{borderColor:'#ccc',borderRadius:10,borderWidth:5,padding:20,marginVertical:10,alignItems:'center'}}
               onPress ={()=> this.props.navigation.navigate('Screen')}
               >

                    <Text style={{color:'#ccc'}}>Tugas Bang Hafif</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

export default Splash;