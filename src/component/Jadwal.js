import React from 'react';
import { Text, View , FlatList,Image, StyleSheet,ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
class Sholats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data1 : []
     }
  }
  ambildata1 = () => {
    return fetch('https://haydakwah.000webhostapp.com/data/BacaanSholat.json')
    .then((respose1) => respose1.json())
    .then((resposeJson1) => {
      console.log(resposeJson1)
      this.setState({
        data1 : resposeJson1
      })
    } )
    .catch((error) => console.log(error))
  }

  componentDidMount(){
    this.ambildata1()
  }

  renderItems = ({item}) => {
    const {
      Ihram,
      Alfatiha,
      Bisamillah,
      Iftitah,
      Rukuk,
      Iktidal,
      Sujud,
      Duduk,
      Akhir,
      Awal1,
      Shalawat1
      } = item
    return(
      <View>
          <View style={styles.border}>
            <Text style={styles.teksJudul}>1.  Takbiratul Ihram  : </Text>
            <View style={{alignItems:'center'}}>
              <Image source={{uri : 'https://ustadzrofii.files.wordpress.com/2012/09/gs-2.jpg'}}
              style={{height:100,width:100}}
              />
            </View>
            <Text style={styles.Arab}>{Ihram}</Text>
            <Text style={styles.text2}> Allahu Akbar</Text>
            <View style={styles.center}>
              <Text style={styles.text2}>Membaca Iftitah (Sunnah)</Text>
            </View>
            <Text style={styles.text2}> {Iftitah} </Text>
            <View style={styles.center}>
              <Text style={styles.text2}>Artinya : “Allah Maha Besar, Maha Sempurna Kebesaran-Nya. Segala Puji Bagi Allah, 
                                          Pujian Yang Sebanyak-Banyaknya. Dan Maha Suci Allah Sepanjang Pagi Dan Petang.”</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <View style={{alignItems:'center'}}>
              <Image source={{uri : 'https://ustadzrofii.files.wordpress.com/2012/09/gs-6.jpg'}}
              style={{height:100,width:100}}
              />
            </View>
            <Text style={styles.teksJudul}>2.  Membaca Al-Fatihah  : </Text>
            <View style={{flex:1,alignItems:'center'}}>
              <Text style={styles.text3}> "{Bisamillah}" </Text>
            </View>
            <Text style={styles.Arab}>{Alfatiha }</Text>
            <Text style={styles.text2}>Artinya : Segala puji bagi Allah, Tuhan seluruh alam, 
                                                Yang Maha Pengasih, Maha Penyayang, 
                                                Pemilik hari pembalasan. Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan. 
                                                Tunjukilah kami jalan yang lurus (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.</Text>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            
            <Text style={styles.teksJudul}>3.  Bacaan Saat Rukuk  : </Text>
            <View style={{alignItems:'center'}}>
              <Image source={{uri : 'https://ustadzrofii.files.wordpress.com/2012/09/gs-9.jpg'}}
              style={{height:100,width:100}}
              />
            </View>
            <View>
              <Text style={styles.text2}>Baca 3x</Text>
              <Text style={styles.Arab}>{Rukuk}</Text>
              <Text style={styles.text2}>Artinya : “Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya.”</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <Text style={styles.teksJudul}>4.  Doa Iktidal  : </Text>
            <View style={{alignItems:'center'}}>
              <Image source={{uri : 'https://ustadzrofii.files.wordpress.com/2012/09/gs-6.jpg'}}
              style={{height:100,width:100}}
              />
            </View>
            <View>
              <Text style={styles.Arab}>{Iktidal}</Text>
              <Text style={styles.text2}>Artinya : Allah mendengar orang yang memuji-Nya</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <Text style={styles.teksJudul}>5.  Bacaan Saat Sujud  : </Text>
            <View>
            <View style={{alignItems:'center'}}>
              <Image source={{uri : 'https://ustadzrofii.files.wordpress.com/2012/09/gs-12.jpg'}}
              style={{height:100,width:100}}
              />
            </View>
              <Text style={styles.text2}>Baca 3x</Text>
              <Text style={styles.Arab}>{Sujud}</Text>
              <Text style={styles.text2}>Artinya : “Maha Suci Tuhanku Yang Maha Tinggi, dan dengan segala puji bagi-Nya.”</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <Text style={styles.teksJudul}>6.  Bacaan Saat Duduk antara Dua Sujud  : </Text>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
              <Image source={{uri : 'https://ustadzrofii.files.wordpress.com/2012/09/gs-17.jpg'}}
              style={{height:100,width:100}}
              />
              <Image source={{uri : 'https://ustadzrofii.files.wordpress.com/2012/09/gs-19.jpg'}}
              style={{height:100,width:100}}
              />
            </View>
            <View>
              <Text style={styles.Arab}> {Duduk} </Text>
              <Text style={styles.text2}>Artinya:“Ya Allah, 
                                  ampunilah aku, kasihanilah aku, cukupilah aku, 
                                  angkatlah derajatku, berikanlah rejeki kepadaku, 
                                  berikanlah petunjuk kepadaku, berilah kesehatan kepadaku dan ampunilah aku.”</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <Text style={styles.teksJudul}>7.  Bacaan Saat Tahiyat Akhir  : </Text>
            <View style={{alignItems:'center'}}>
              <Image source={{uri : 'https://ustadzrofii.files.wordpress.com/2012/09/gs-22.jpg'}}
              style={{height:100,width:100}}
              />
            </View>
            <View>
              <Text style={styles.Arab}> {Akhir} </Text>
              <Text style={styles.text2}>Artinya : “Segala kehormatan, keberkahan, rahmat dan keselamatan (shalawat), serta kebaikan hanyalah kepunyaan Allah. Keselamatan, rahmat dan berkah dari Allah semoga tetap tercurah atasmu, wahai Nabi (Muhammad). Keselamatan, rahmat dan berkah dari Allah semoga juga tercurah atas kami, dan juga atas seluruh hamba Allah yang shaleh. Aku bersaksi bahwa tiada Tuhan selain Allah dan bahwa Muhammad adalah utusan allah.”</Text>
              <View style={styles.line}/>
              <Text style={styles.teksJudul}>Baca Shalawat : </Text>
              <Text style={styles.Arab}> {Shalawat1} </Text>
              <Text style={styles.text2}>Artinya:“Ya Allah, limpahkanlah rahmat dan keselamatan untuk Nabi Muhammad. Dan juga limpahkanlah rahmat dan keselamatan kepada keluarga Muhammad, sebagaimana telah Engkau limpahkan rahmat dan keselamatan kepada Ibrahim dan kepada keluarga Ibrahim. Limpahkanlah keberkahan kepada Muhammad dan kepada keluarga Muhammad, sebagaimana Engkau telah melimpahkan keberkahan kepada Ibrahim dan kepada keluarga Ibrahim. Di seluruh alam semesta, sesungguhnya Engkau adalah Maha Terpuji lagi Maha Agung.</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <Text style={styles.teksJudul}>8.  Mengucapakan Salam : </Text>
            <View>
              <Text style={styles.text2}>Menoleh ke bahu kanan dan kiri Sambil Mengucapakan Salam :</Text>
              <Text style={styles.Arab}> السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ</Text>
              <Text style={styles.text2}>Artinya : “Semoga keselamatan dan rahmat Allah limpahkan kepadamu.”</Text>
            </View>
          </View>
      </View>
    ) 
  }

  render() {
    return (
      <View>
          <FlatList
            data = {this.state.data1}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            keyExtractor={item1 => item1.toString()}
            renderItem={this.renderItems}
            />
      </View>
    )
  }
}

class dzikirSholat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data : []
     }
  }
  ambildata = () => {
    return fetch('https://haydakwah.000webhostapp.com/data/Kilo.json')
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
  renderItems = ({item}) => {
      const {
        Dzikir1,
        Dzikir2,
        Dzikir3,
        Dzikir4,
        Dzikir5,
        Dzikir6,
        Dzikir7,
        Dzikir8,
        Dzikir9,
        Dzikir10,
        Dzikir11,
        Dzikir12
      } = item
      return(
        <View>
          <View style={styles.border}>
            <Text style={styles.teksJudul}> 1. Istighfar </Text>
            <View>
              <Text style={styles.Arab}>{Dzikir1}</Text>
              <Text style={styles.text2}>Artinya : “Aku mohon ampun kepada Allah yang Maha Agung, yang tiada Tuhan selain Dia Yang Maha Hidup lagi Maha Berdiri Sendiri, dan aku bertaubat kepada-Nya.”</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <Text style={styles.teksJudul}> 2. Doa Keselamatan </Text>
            <View>
              <Text style={styles.Arab}>{Dzikir2}</Text>
              <Text style={styles.text2}>Artinya: “Ya Allah, Engkaulah As-Salaam (Yang selamat dari kejelekan-kejelekan, kekurangan-kekurangan dan kerusakan-kerusakan) dan dari-Mu as-salaam (keselamatan), Maha Berkah Engkau Wahai Dzat Yang Maha Agung dan Maha Baik.” (HR. Muslim).</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <Text style={styles.teksJudul}> 3. Membaca Kalimat Tauhid </Text>
            <View>
              <Text style={styles.Arab}>{Dzikir3}</Text>
              <Text style={styles.Arab}>“Laa ilaha illallah wahda, laa syarika lah, Lahul mulku wa lahul hamdu wa huwa ‘ala kulli syai-in qodiir.”</Text>
              <Text style={styles.text2}>Artinya : “Tidak ada Rabb yang berhak disembah kecuali Allah Yang Maha Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan. Bagi-Nya pujaan. Dia-lah Yang Mahakuasa atas segala sesuatu.”</Text>
              <Text style={styles.Arab}>{Dzikir4}</Text>
              <Text style={styles.text2}>Artinya : “Tiada tuhan yang berhak diibadahi selain Allah, tiada sekutu bagi-Nya, bagi-Nya segala kerajaan, dan pujian, dan Dia Maha Berkuasa atas segala sesuatu. Ya Allah, tidak ada yang dapat menolak terhadap apa yang Engkau beri dan tidak ada yang dapat memberi terhadap apa yang Engkau tolak dan orang yang memiliki kekayaan tidak dapat menghalangi dari siksa-Mu.”</Text>
              <Text style={styles.Arab}>{Dzikir5}</Text>
              <Text style={styles.text2}>Artinya : “Tiada Rabb yang berhak disembah kecuali Allah, Yang Maha Esa, tidak ada sekutu bagiNya. BagiNya kerajaan dan pujaan. Dia Mahakuasa atas segala sesuatu. Tidak ada daya dan kekuatan kecuali (dengan pertolongan) Allah. Tiada Rabb yang hak disembah kecuali Allah. Kami tidak menyembah kecuali kepadaNya. Bagi-Nya nikmat, anugerah dan pujaan yang baik. Tiada Rabb (yang hak disembah) kecuali Allah, dengan memurnikan ibadah kepadaNya, sekalipun orang-orang kafir sama benci.”</Text>

            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <Text style={styles.teksJudul}>4. Membaca Doa Pujian Kepada Allah </Text>
            <View>
              <Text style={styles.Arab}>Dibaca 33x</Text>
              <Text style={styles.Arab}>{Dzikir6}</Text>
              <Text style={styles.text2}>Artinya : “Aku mohon ampun kepada Allah yang Maha Agung, yang tiada Tuhan selain Dia Yang Maha Hidup lagi Maha Berdiri Sendiri, dan aku bertaubat kepada-Nya.”</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.border}>
            <Text style={styles.teksJudul}> 5. Membaca Tasbih, Tahmid dan Takbir </Text>
            <View>
            <Text style={styles.Arab}>Dibaca 33x</Text>
              <Text style={styles.Arab}>{Dzikir7}</Text>
              <Text style={styles.text2}>Artinya : “Maha suci Allah.”</Text>
              <Text style={styles.Arab}>Dibaca 33x</Text>
              <Text style={styles.Arab}>{Dzikir8}</Text>
              <Text style={styles.text2}>Artinya : “Alhamdulillah.”</Text>
              <Text style={styles.Arab}>Dibaca 33x</Text>
              <Text style={styles.Arab}>{Dzikir9}</Text>
              <Text style={styles.text2}>Artinya : “Allah Maha Besar.”</Text>
            </View>
          </View>
        </View>
      )
   
  }


  render() {
    return (
      <View>
      <FlatList
        data = {this.state.data}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        keyExtractor={item => item.toString()}
        renderItem={this.renderItems}

      />
  </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
 Sholat:{
   screen:Sholats,
 },
 Dzikir:{
   screen:dzikirSholat
 }

})

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  gambar:{
     height:20,
     width:20
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
    fontSize:30,
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
    // borderColor:'#ccc',
    // borderWidth:2,
    // padding:10,
    // borderRadius:10,
    // marginVertical:5
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
