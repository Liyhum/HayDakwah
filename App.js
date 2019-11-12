import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native'
import Routes from './src/routes/routes'
class routes extends React.Component {
  state={
    role : true
  }
    render() {
      setTimeout(()=>{
        this.setState({
          role:false
        })
      },3000)
      if (this.state.role){
        return (
          <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
            <View>
              <ActivityIndicator size='large' color='black'/>
              <Text style={{fontSize:50}}>Please Waitt</Text>  
            </View>
            
          </View>
        )
      }
      
        return (
              <Routes/>
        );
    }
}

export default routes;

