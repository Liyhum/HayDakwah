import React from 'react';
import { Text, View,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class Pagis extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data : []
     }
  }
  ambildata = () => {
    return fetch('https://haydakwah.000webhostapp.com/data/Dzikir.json')
    .then((respose) => respose.json())
    .then((resposeJson) => {
      console.log(resposeJson)
      this.setState({
        data : resposeJson
      })
    } )
    .catch((error) => console.log(error))
  }
  componentDidMount(){
    this.ambildata()
  }
  renderItems= ({item})=> {
    const {
      Pagi1,
      Pagi2,
      Pagi3,
      Pagi4,
      Pagi5,
      Pagi6,
      Pagi7,
      Pagi8,
      Pagi9,
      Pagi10
    } =item
    return(
      <View>
        <View style={styles.header}>
            <Text style={styles.teks}> Pagi</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={styles.teksJudul}>أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.teksJudul}>1. Membaca Ayat Kursi</Text>
          <Text style={styles.text3}>(Baca 1x)</Text>
          <Text style={styles.Arab}>{Pagi1}</Text>
          <Text style={styles.text2}> Artinya: “Allah, tidak ada ilah (yang berhak disembah) melainkan Dia, yang hidup kekal lagi terus menerus mengurus (makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa’at di sisi-Nya tanpa seizin-Nya. Dia mengetahui apa-apa yang di hadapan mereka dan di belakang mereka. Mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar.” (QS. Al Baqarah: 255)</Text>
          
        </View>
        <View style={styles.line}/>
        <View style={styles.border}>
          <Text style={styles.teksJudul}>2. Membaca surat Al Ikhlas, Al Falaq, An Naas</Text>
          <Text style={styles.text3}>(Baca 3x)</Text>
          <Text style={styles.Arab}>{Pagi2}</Text>
          <Text style={styles.text2}>Artinya : “Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah ilah yang bergantung kepada-Nya segala urusan. Dia tidak beranak dan tiada pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia.” (QS. Al Ikhlas: 1-4)</Text>
          <Text style={styles.text3}>(Baca 3x)</Text>
          <Text style={styles.Arab}>{Pagi3}</Text>
          <Text style={styles.text2}>Artinya : “Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb yang menguasai Shubuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan-kejahatan wanita tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan orang yang dengki apabila ia dengki”. (QS. Al Falaq: 1-5)</Text>
          <Text style={styles.text3}>(Baca 3x)</Text>
          <Text style={styles.Arab}>{Pagi4}</Text>
          <Text style={styles.text2}>Artinya : “Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan manusia, dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari jin dan manusia.” (QS. An Naas: 1-6)</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.border}>
          <Text style={styles.teksJudul}>3. Membaca Do'a Dzikir Pagi</Text>
          <Text style={styles.text3}> Dibaca 1 x</Text>
          <Text style={styles.Arab}>{Pagi5}</Text>
          <Text style={styles.text2}>Artinya :“Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali Allah semata, tiada sekutu bagi-Nya. Milik Allah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas segala sesuatu. Wahai Rabbku, aku mohon kepada-Mu kebaikan di hari ini dan kebaikan sesudahnya. Aku berlindung kepada-Mu dari kejahatan hari ini dan kejahatan sesudahnya. Wahai Rabbku, aku berlindung kepada-Mu dari kemalasan dan kejelekan di hari tua. Wahai Rabbku, aku berlindung kepada-Mu dari siksaan di neraka dan siksaan di alam kubur.”</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.border}>
          <Text style={styles.teksJudul}>4.  Membaca Sayyidul Istighfar</Text>
          <Text style={styles.Arab}>{Pagi6}</Text>
          <Text style={styles.Arab}>{Pagi7}</Text>
          <Text style={styles.Arab}>{Pagi8}</Text>
          <Text style={styles.Arab}>{Pagi9}</Text>
        </View>
        <View style={styles.line}/>
      </View>
    )
  }
  render() {
    return (
      <FlatList
        data = {this.state.data}
        keyExtractor={item => item.toString()}
        renderItem={this.renderItems}
      />
    );
  }
}

class Petangs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data : []
     }
  }
  ambildata = () => {
    return fetch('https://haydakwah.000webhostapp.com/data/Dzikir.json')
    .then((respose) => respose.json())
    .then((resposeJson) => {
      console.log(resposeJson)
      this.setState({
        data : resposeJson
      })
    } )
    .catch((error) => console.log(error))
  }
  componentDidMount(){
    this.ambildata()
  }
  renderItems=({item})=>{
    const {
      Pagi1,
      Pagi2,
      Pagi3,
      Pagi4,
      Pagi6,
      Pagi7,
      Pagi8,
      Pagi9
    } = item
    return(
      <View>
      <View style={styles.header}>
            <Text style={styles.teks}> Petang</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={styles.teksJudul}>أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.teksJudul}>1. Membaca Ayat Kursi</Text>
          <Text style={styles.text3}>(Baca 1x)</Text>
          <Text style={styles.Arab}>{Pagi1}</Text>
          <Text style={styles.text2}> Artinya: “Allah, tidak ada ilah (yang berhak disembah) melainkan Dia, yang hidup kekal lagi terus menerus mengurus (makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa’at di sisi-Nya tanpa seizin-Nya. Dia mengetahui apa-apa yang di hadapan mereka dan di belakang mereka. Mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar.” (QS. Al Baqarah: 255)</Text>
          
        </View>
        <View style={styles.line}/>
        <View style={styles.border}>
          <Text style={styles.teksJudul}>2. Membaca surat Al Ikhlas, Al Falaq, An Naas</Text>
          <Text style={styles.text3}>(Baca 3x)</Text>
          <Text style={styles.Arab}>{Pagi2}</Text>
          <Text style={styles.text2}>Artinya : “Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah ilah yang bergantung kepada-Nya segala urusan. Dia tidak beranak dan tiada pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia.” (QS. Al Ikhlas: 1-4)</Text>
          <Text style={styles.text3}>(Baca 3x)</Text>
          <Text style={styles.Arab}>{Pagi3}</Text>
          <Text style={styles.text2}>Artinya : “Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb yang menguasai Shubuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan-kejahatan wanita tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan orang yang dengki apabila ia dengki”. (QS. Al Falaq: 1-5)</Text>
          <Text style={styles.text3}>(Baca 3x)</Text>
          <Text style={styles.Arab}>{Pagi4}</Text>
          <Text style={styles.text2}>Artinya : “Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan manusia, dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari jin dan manusia.” (QS. An Naas: 1-6)</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.border}>
          <Text style={styles.teksJudul}>4.  Membaca Sayyidul Istighfar</Text>
          <Text style={styles.Arab}>{Pagi6}</Text>
          <Text style={styles.Arab}>{Pagi7}</Text>
          <Text style={styles.Arab}>{Pagi8}</Text>
          <Text style={styles.Arab}>{Pagi9}</Text>
        </View>
        <View style={styles.line}/>
      </View>
    )
  }
  render() {
    return (
      <FlatList
      data = {this.state.data}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        keyExtractor={item => item.toString()}
        renderItem={this.renderItems}
      />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Pagi:{
    screen:Pagis,
    
  },
  Petang: Petangs,

});

export default createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  gambar:{
     height:20,
     width:20
  },
  header:{
    backgroundColor:'white',
    height:50,
    width:'100%',
    elevation:4,
    alignItems:'center',
    justifyContent:'center'
  },
  teks:{
    fontSize:25,
  },
  Arab: {
    fontSize:20,
    fontWeight:'bold',
    color:'gray'
  },
  text2: {
    fontSize:20,
    color:'gray',
    marginTop:5,
    fontStyle:'italic'
  },
  text3: {
    fontSize:20,
    color:'gray',
    marginTop:5
  },
  teksJudul:{
    color:'#9C9A9A',
    fontSize:25,
  },
  border:{
    marginVertical:10,
    marginHorizontal:10
  },
  line:{
    borderColor:'#ccc',
    borderWidth:1,
    marginVertical:10
  },
  center:{
    alignItems:'center',
    flex:1,
    justifyContent:'center'
  }
})
