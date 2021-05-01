import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight} from 'react-native';
// import {css} from './assets/css/css';
import { Button } from 'react-native-elements';

export default function Home(props)
{
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },

        img: {
            width: 350,
            height: 130,
            alignItems: 'center',
            resizeMode: 'stretch',
            position: 'absolute',
            top: 5,
          },

          title: {
            alignItems: 'flex-end',
            fontSize: 46,
            position: 'absolute',
            top: 140,
            borderTopColor: 'gray',
            borderTopWidth: 1,
            width: 400,
            marginBottom: 150,
        },

          btn: {
            backgroundColor: '#7c35b7',
            marginBottom: 20,
            width: 350,
            height: 100,
            borderRadius: 15,
            borderWidth: 5,
            borderColor: '#61159f',
            
          },

          imgContato: {
            backgroundColor: '#6959CD',
            alignSelf: 'center',
            position: 'absolute',
            top: 140,      
                    
          },
      });

    return(
        <View style={styles.container}>

            <Image style={styles.img} source={require('../assets/img/logotipo-menu.png')}/>
            <Text style={styles.title}>        SERVIÇOS</Text>
            <Button buttonStyle={styles.btn} title="LAVANDERIA" onPress={()=>props.navigation.navigate('Lavagem') }/>
            <Button buttonStyle={styles.btn} title="PASSADERIA" onPress={()=>props.navigation.navigate('Passagem')}/>
            <TouchableHighlight  onPress={()=>props.navigation.navigate('Form')  } >
              <Image style={styles.imgContato} source={require('../assets/img/contato.png')}/>
            </TouchableHighlight>

      

        </View>
    )
}