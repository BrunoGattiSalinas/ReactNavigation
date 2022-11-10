import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Api from './Api';


export default function Peruibe() {
  const [dados, setDados] = useState("");

  const [cidade, setCidade] = useState('Peruibe')
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,description,time,wind_speedy,forecast,max,min,date&key=c6186edf&city_name=${cidade},SP`)
    setDados(response.data.forecast);
  
  }

  function limpar(){
    setDados("");
  } 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoTitulo}>Previsão do tempo - Peruíbe</Text>
        <View style={styles.imgs}>
        <Image
      style={styles.imgg}
      source={{
        uri: 'https://veja.abril.com.br/wp-content/uploads/2016/11/santos.jpg?quality=70&strip=all',
      }}
      />
      </View>
      </View>

      <View style={styles.blocos}>
        <TouchableOpacity
        style={styles.btn}
        onPress={carregaDados}
        >
          <Text style={styles.btnTexto}>Pesquisar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.btn}
        onPress={limpar}
        >
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>

      </View>
      
        
        <FlatList
          data={dados}
          renderItem={({item}) => {
            return (
              <View style={styles.tempo}>
                <Text>Data: {item.date}</Text>
                <Text>Max: {item.max}</Text>
                <Text>Min: {item.min}</Text>
                <Text>Min: {item.description}</Text>
              </View>
            );
          }}
        
        />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempo:{
    marginLeft: '10%',
    marginBottom: 10
  },
  textoTitulo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#1B613D',
  },
  header: {
    margin: 50
  },
  imgg:{
    width: 320,
    height: 190,
    margin: 5,
    borderRadius: 20,
  },
  imgs: {
    alignItems: 'center',
  },
  blocos: {
    fontSize: 20,
  },
  texto: {
    color: '#4281F5',
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    width: 265,
    height: 35,
    fontSize: 20,
    borderColor: '#4281F5'
  },
  btn: {
    width: 265,
    height: 45,
    backgroundColor: '#1B613D',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  btnTexto: {
    fontSize: 30,
    color: '#FFF'
  }
});