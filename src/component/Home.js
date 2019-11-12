import React from 'react';
import {View,ImageBackground,ScrollView,Text,TouchableOpacity} from 'react-native'
class routes extends React.Component {
    render() {
        return (
            <View>
                    <View style={{backgroundColor:'red',height:150,elevation:10}}>
                        <ImageBackground source ={require('../../Assets/Back.jpg')}
                        style={{width:'100%',height:150,alignItems:'center',justifyContent:'center'}}
                        >
                        <View style={{height:100,width:250,borderColor:'white',borderWidth:3,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'white',fontSize:25}}>HayDakwah</Text>
                        </View>
                        </ImageBackground>
                    </View>
                    <View style={{marginTop:150,paddingHorizontal:35}}>
                        <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity style={{borderColor:'#ccc',borderWidth:3,borderRadius:90,height:90,width:90}}
                            onPress ={()=> this.props.navigation.navigate('Dzikir')}
                            >
                                <View style={{backgroundColor:'red',height:'100%',width:'100%',borderRadius:90,
                                alignItems:'center',justifyContent:'center'
                                }}>
                                <Text style={{fontWeight:'bold',fontSize:18}}>Dzikir</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderColor:'#ccc',borderWidth:3,borderRadius:90,height:90,width:90}}
                            onPress ={()=> this.props.navigation.navigate('Jadwal')}
                            >
                                <View style={{backgroundColor:'red',height:'100%',width:'100%',borderRadius:90,
                                alignItems:'center',justifyContent:'center'
                                }}>
                                <Text style={{fontWeight:'bold',fontSize:18}}>Jadwal</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderColor:'#ccc',borderWidth:3,borderRadius:90,height:90,width:90}}
                            onPress ={()=> this.props.navigation.navigate('Husna')}
                            >
                                <View style={{backgroundColor:'red',height:'100%',width:'100%',borderRadius:90,
                                alignItems:'center',justifyContent:'center'
                                }}>
                                <Text style={{fontWeight:'bold',fontSize:18}}>Husna</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

            </View>
        );
    }
}

export default routes;