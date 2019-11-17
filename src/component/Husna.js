import React from 'react';
import {View,TextInput,Text,StyleSheet,ScrollView,Alert,TouchableOpacity} from 'react-native'


export default class Dzikir extends React.Component{
    render (){
        return(
        <View>
            <ScrollView>
                <View style={{flex:1,alignItems:'center'}}> 
                    <Text style={{fontSize:20}}>ASMAUL HUSNA</Text>
                </View>
                <View style={styles.posisi}>
                        <View style={styles.bentuk}>            
                        <Text style ={styles.Teks}>الرحمن</Text>
                        <Text style ={styles.Teks}> Yang Maha Pengasih </Text>
                        </View>
                        <View style={styles.bentuk}>                                    
                        <Text style ={styles.Teks}>الرحيم</Text>
                        <Text style ={styles.Teks}> Yang Maha Penyayang </Text>
                        </View>
           
                        <View style={styles.bentuk}>            
                        <Text style ={styles.Teks}>الملك</Text>
                        <Text style ={styles.Teks}> Yang Maha Merajai </Text>
                        </View>
                       
           
                        <View style={styles.bentuk}>            
                        <Text style ={styles.Teks}>القدوس</Text>
                        <Text style ={styles.Teks}>	Yang Maha Suci </Text>
                        </View>
           
                        <View style={styles.bentuk}>            
                        <Text style ={styles.Teks}>السلام</Text>
                        <Text style ={styles.Teks}> Yang Maha MemberiKesejahteraan</Text>
                        </View>
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>	المؤمن</Text>
                        <Text style ={styles.Teks}>Yang Maha MemberiKeamanan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المهيمن</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengatur</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>العزيز</Text>
                        <Text style ={styles.Teks}>Yang Maha Perkasa</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الجبار</Text>
                        <Text style ={styles.Teks}>Yang Memiliki Kegagahan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المتكبر	</Text>
                        <Text style ={styles.Teks}>Yang Maha Megah</Text>
                        </View>
                
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>الخالق	</Text>
                        <Text style ={styles.Teks}>Yang Maha Pencipta</Text>
                        </View>
               
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>البارئ	</Text>
                        <Text style ={styles.Teks}>Yang Maha Melepaskan</Text>
                        </View>
               
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>المصور</Text>
                        <Text style ={styles.Teks}>Yang Maha MembentukRupa</Text>
                        </View>
               
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>الغفار</Text>
                        <Text style ={styles.Teks}>Yang Maha Pengampun</Text>
                        </View>
               
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>القهار</Text>
                        <Text style ={styles.Teks}>Yang Maha Memaksa</Text>
                        </View>
        
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>الوهاب</Text>
                        <Text style ={styles.Teks}>Yang Maha PemberiKarunia</Text>
                        </View>
               
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>الرزاق</Text>
                        <Text style ={styles.Teks}>Yang Maha PemberiRezeki</Text>
                        </View>
               
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>الفتاح</Text>
                        <Text style ={styles.Teks}>Yang Maha PembukaRahmat</Text>
                        </View>
               
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>العليم</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengetahu </Text>
                        </View>
               
                        <View style={styles.bentuk}>                
                        <Text style ={styles.Teks}>القابض</Text>
                        <Text style ={styles.Teks}>Yang Maha Menyempitkan</Text>
                        </View>
               
           
                
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الباسط</Text>
                        <Text style ={styles.Teks}>Yang Maha Melapangkan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الخافض</Text>
                        <Text style ={styles.Teks}>Yang Maha Merendahkan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الرافع</Text>
                        <Text style ={styles.Teks}>Yang Maha Meninggikan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المعز</Text>
                        <Text style ={styles.Teks}>Yang Maha Memuliakan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المذل</Text>
                        <Text style ={styles.Teks}>Yang Maha Menghinakan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>السميع</Text>
                        <Text style ={styles.Teks}>Yang Maha Mendengar</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>البصير</Text>
                        <Text style ={styles.Teks}>Yang Maha Melihat</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الحكم</Text>
                        <Text style ={styles.Teks}>Yang Maha Menetapkan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>العدل</Text>
                        <Text style ={styles.Teks}>Yang Maha Adil</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>اللطيف</Text>
                        <Text style ={styles.Teks}>Yang Maha Lembut</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الخبير</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengenal</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الحليم</Text>
                        <Text style ={styles.Teks}>Yang Maha Penyantun</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>العظيم</Text>
                        <Text style ={styles.Teks}>Yang Maha Agung</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الغفور</Text>
                        <Text style ={styles.Teks}>Yang Maha MemberiPengampunan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الشكور</Text>
                        <Text style ={styles.Teks}>Yang Maha PembalasBudi</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>العلى</Text>
                        <Text style ={styles.Teks}>Yang Maha Tinggi</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الكبير</Text>
                        <Text style ={styles.Teks}>Yang Maha Besar</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الحفيظ</Text>
                        <Text style ={styles.Teks}>Yang Maha Memelihara</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المقيت</Text>
                        <Text style ={styles.Teks}>Yang Maha PemberiKecukupan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الحسيب</Text>
                        <Text style ={styles.Teks}>Yang Maha MembuatPerhitungan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الجليل</Text>
                        <Text style ={styles.Teks}>Yang Maha Luhur</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الكريم</Text>
                        <Text style ={styles.Teks}>Yang Maha Pemurah</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الرقيب</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengawasi</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المجيب</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengabulkan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الواسع</Text>
                        <Text style ={styles.Teks}>Yang Maha Luas</Text>
                        </View>
                   
               
                
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الحكيم</Text>
                        <Text style ={styles.Teks}>Yang Maha MakaBijaksana</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الودود</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengasihi</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المجيد</Text>
                        <Text style ={styles.Teks}>Yang Maha Mulia</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الباعث</Text>
                        <Text style ={styles.Teks}>Yang Maha Membangkitkan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الشهيد</Text>
                        <Text style ={styles.Teks}>Yang Maha Menyaksikan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الحق</Text>
                        <Text style ={styles.Teks}>Yang Maha Benar</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الوكيل</Text>
                        <Text style ={styles.Teks}>Yang Maha Memelihara</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>القوى</Text>
                        <Text style ={styles.Teks}>Yang Maha Kuat</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المتين</Text>
                        <Text style ={styles.Teks}>Yang Maha Kokoh</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الولى</Text>
                        <Text style ={styles.Teks}>Yang Maha Melindungi</Text>
                        </View>

                   
               
                
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الحميد</Text>
                        <Text style ={styles.Teks}>Yang Maha Terpuji</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المحصى</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengalkulas</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المبدئ</Text>
                        <Text style ={styles.Teks}>Yang Maha Memulai</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المعيد</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengembalika </Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المحيى</Text>
                        <Text style ={styles.Teks}>Yang Maha Menghidupkan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المميت</Text>
                        <Text style ={styles.Teks}>Yang Maha Mematikan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الحي</Text>
                        <Text style ={styles.Teks}>Yang Maha Hidup</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>القيوم</Text>
                        <Text style ={styles.Teks}>Yang Maha Mandiri</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الواجد</Text>
                        <Text style ={styles.Teks}>Yang Maha Penemu</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الماجد</Text>
                        <Text style ={styles.Teks}>Yang Maha Mulia</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الواحد</Text>
                        <Text style ={styles.Teks}>Yang Maha Tunggal</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الاحد</Text>
                        <Text style ={styles.Teks}>Yang Maha Esa</Text>
                        </View>
                
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الصمد	</Text>
                        <Text style ={styles.Teks}>Yang Maha Dibutuhkan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>القادر</Text>
                        <Text style ={styles.Teks}>Yang Maha Menentukan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المقتدر</Text>
                        <Text style ={styles.Teks}>Yang Maha Berkuasa</Text>
                        </View>

                   
               
                
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المقدم</Text>
                        <Text style ={styles.Teks}>Yang Maha Mendahulukan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المؤخر</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengakhirkan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الأول</Text>
                        <Text style ={styles.Teks}>Yang Maha Awal</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الأخر</Text>
                        <Text style ={styles.Teks}>Yang Maha Akhir</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الظاهر</Text>
                        <Text style ={styles.Teks}>Yang Maha Nyata</Text>
                        </View>

                   
               
                
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الباطن</Text>
                        <Text style ={styles.Teks}>Yang Maha Ghaib</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الوالي</Text>
                        <Text style ={styles.Teks}>Yang Maha Memerintah</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المتعالي</Text>
                        <Text style ={styles.Teks}>Yang Maha Tinggi</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>البر	</Text>
                        <Text style ={styles.Teks}>Yang Maha PemberiKebajikan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>التواب</Text>
                        <Text style ={styles.Teks}>Yang Maha PenerimaTobat</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المنتقم</Text>
                        <Text style ={styles.Teks}>Yang Maha PemberiBalasan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>العفو</Text>
                        <Text style ={styles.Teks}>Yang Maha Pemaaf</Text>
                        </View>

                   
                    
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>مالك الملك	</Text>
                        <Text style ={styles.Teks}>Yang Maha PenguasaKerajaan</Text>
                        </View>

                        
                        <TouchableOpacity onPress ={()=>Alert.alert('Yang Maha Pemilik Kebesarandan  Kemuliaan')}
                        >            
                        <View style={styles.bentuk}>       
                        <Text style ={styles.Teks}>ذو الجلال و الإكرام	</Text>
                        </View>
                        </TouchableOpacity>
                        
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المقسط</Text>
                        <Text style ={styles.Teks}>Yang Maha PemberiKeadilan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الجامع</Text>
                        <Text style ={styles.Teks}>Yang Maha Mengumpulkan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الغنى</Text>
                        <Text style ={styles.Teks}>Yang Maha Kaya</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المغنى</Text>
                        <Text style ={styles.Teks}>Yang Maha PemberiKekayaan</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>المانع</Text>
                        <Text style ={styles.Teks}>Yang Maha Mencegah</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الضار</Text>
                        <Text style ={styles.Teks}>Yang Maha PenimpaKemudharatan</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>النافع	</Text>
                        <Text style ={styles.Teks}>Yang Maha MemberiManfaat</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>النور</Text>
                        <Text style ={styles.Teks}>Yang Maha Bercahaya</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الهادئ</Text>
                        <Text style ={styles.Teks}>Yang Maha PemberiPetunjuk</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الباقي	</Text>
                        <Text style ={styles.Teks}>Yang Maha Keka</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الوارث</Text>
                        <Text style ={styles.Teks}>Yang Maha Pewaris</Text>
                        </View>
                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الرشيد</Text>
                        <Text style ={styles.Teks}>Yang Maha Pandai</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الصبور</Text>
                        <Text style ={styles.Teks}>Yang Maha Sabar</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>البديع</Text>
                        <Text style ={styles.Teks}>Yang Maha Pencipta Tiada Bandinganny</Text>
                        </View>

                   
                        <View style={styles.bentuk}>                    
                        <Text style ={styles.Teks}>الرؤوف</Text>
                        <Text style ={styles.Teks}>Yang Maha Pengasuh</Text>
                        </View>
                </View>    
            </ScrollView>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    bentuk:{
        height:90,
        width:90,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#ccc',
        marginHorizontal:10,
        marginVertical:10,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center'
    },
    posisi:{
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center'
    },
    Teks:{
        fontSize:14,
        color:'#000',
        paddingHorizontal:4
    }
})


