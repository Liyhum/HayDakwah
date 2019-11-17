import React from 'react';
import {View,TextInput,Text,DrawerLayoutAndroid,ImageBackground,TouchableOpacity,ScrollView,Image} from 'react-native'
import Panel from 'react-native-panel'
import { thisTypeAnnotation } from '@babel/types';


class routes extends React.Component {
    state={
        role:false,
        tekan:false,
        role2:false,
        menu:false
    }  
    Tekan=() => {
        this.setState({role:!this.state.role})
    }
    onScreen2 =() =>{
        this.setState({tekan:!this.state.tekan})
    }
    onScreen3 =() =>{
        this.setState({role2:!this.state.role2})
    }
    onScreen4 =() =>{
        this.setState({menu:!this.state.menu})
    }
    
    junio=()=>{
        if(this.state.role==true){
            return(
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{borderRadius:25,borderWidth:5,padding:10,borderColor:'white',width:'40%',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Konsep</Text>
                    </View>
                    <View style={{borderRadius:25,borderWidth:5,padding:10,borderColor:'white',width:'40%',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Detail</Text>
                    </View>
                </View>
                
            )
        }
        else{
            return(
                <View>
                </View>
            )
        }
    }
    junio2=()=>{
        if(this.state.tekan==true){
            return(
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{borderRadius:25,borderWidth:5,padding:10,borderColor:'white',width:'40%',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Konsep</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderRadius:25,borderWidth:5,padding:10,borderColor:'white',width:'40%',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Detail</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else{
            <View></View>
        }
    }
    junio3=()=>{
        if(this.state.role2==true){
            return(
                <View style={{justifyContent:'space-between',flex:1,paddingHorizontal:15,flexDirection:'row'}}>
                    <View style={{borderRadius:25,borderWidth:5,padding:10,borderColor:'white',width:'40%',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Konsep</Text>
                    </View>
                    <View style={{borderRadius:25,borderWidth:5,padding:10,borderColor:'white',width:'40%',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Detail</Text>
                    </View>
                </View>
            )
        }
        else{
            <View></View>
        }
    }
    Menu =()=> {
        if (this.state.menu==true){
            alert('asdas')
        }
        else {
            <View></View>
        }
    }
            

    render(){
        const navigationView=(
            <View>
                <Text>Hayaypppppp</Text>
            </View>
        )
        return (
            <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
            >
                <View>
                    {this.Menu}
                    <View>
                        <Image
                        source={require('../../Assets/BackSc.jpg')}
                        style={{height:210,width:'100%'}}
                        />
                    </View>
                    <ImageBackground
                    source={require('../../Assets/Back3.jpg')}
                    style={{height:'100%',width:'100%'}}
                    >
                        <View>
                            <ScrollView>
                                    <View style={{backgroundColor:'black',
                                    borderColor:'violet',
                                    height:70,
                                    width:'100%',
                                    borderWidth:4,
                                    justifyContent:'space-between',
                                    paddingHorizontal:6,
                                    flexDirection:'row',
                                    alignItems:'center'
                                    }}>
                                        <Text style={{fontSize:35,color:'violet'}}>Java Script</Text>
                                        <TouchableOpacity onPress={()=> this.onScreen4()}>
                                            <Image
                                            source={require('../../Assets/menu.png')}
                                            style={{height:50,width:50,backgroundColor:'white'}}
                                            />
                                        </TouchableOpacity>
                                        
                                    </View>
                            <View style={{paddingHorizontal:15}}>
                                <View style={{backgroundColor:'white',height:60,width:'100%',borderRadius:30,marginVertical:5
                                }}>
                                    
                                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:10,
                                    paddingHorizontal:40
                                    }}
                                    onPress={()=> this.Tekan()}
                                    >
                                        <Text style={{fontSize:20,fontWeight:'bold',color:'#ccc'}}>Tipe Data</Text>
                                        <View style={{height:40,width:40,borderRadius:40,backgroundColor:'red'}}></View>
                                    </TouchableOpacity>
                                    
                                </View>
                                {this.junio()}
                                <View style={{backgroundColor:'white',height:60,width:'100%',borderRadius:30,marginVertical:5
                                }}>
                                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingVertical:10,}}
                                    onPress={()=> this.onScreen2()}
                                    >
                                        <Text style={{fontSize:20,fontWeight:'bold',color:'#ccc'}}>Tipe Data</Text>
                                        <View style={{height:40,width:40,borderRadius:40,backgroundColor:'red',marginLeft:120}}></View>
                                    </TouchableOpacity>
                                    
                                </View>
                                {this.junio2()}
                                <View style={{backgroundColor:'white',height:60,width:'100%',borderRadius:30,marginVertical:5
                                }}>
                                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingVertical:10,}}
                                    onPress={()=> this.onScreen3()}
                                    >
                                        <Text style={{fontSize:20,fontWeight:'bold',color:'#ccc'}}>Tipe Data</Text>
                                        <View style={{height:40,width:40,borderRadius:40,backgroundColor:'red',marginLeft:120}}></View>
                                    </TouchableOpacity>
                            </View>        
                                </View>
                                {this.junio3()}
                            </ScrollView>
                            
                        </View>
                    </ImageBackground>
                </View>
            </DrawerLayoutAndroid>    
        );
    }
}

export default routes;
