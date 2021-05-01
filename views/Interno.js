import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

export default function Interno(props)
{
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
        //   justifyContent: 'center',
        },

        title: {
            alignItems: 'flex-end',
            fontSize: 46,
            // position: 'absolute',
            top: 140,
            borderTopColor: 'gray',
            borderTopWidth: 1,
            width: 400,
            marginBottom: 150,
            alignSelf: 'center',
        },

        img: {
            width: 350,
            height: 130,
            alignItems: 'center',
            resizeMode: 'stretch',
            position: 'absolute',
            top: 5,
          },

          imgItem: {
            width: 412,
            height: 200,
            alignItems: 'center',
            resizeMode: 'stretch',
            position: 'absolute',
            top: 220,
          },

          imgContato: {
            backgroundColor: '#6959CD',
            alignSelf: 'flex-end',
          },

          end: {
                top: 280,

          },

          desc: {
            top: 220,
            fontSize: 18,
          }
      });

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/img/logotipo-menu.png')}/>
            <Text style={styles.title}>   {props.route.params.nome}</Text>
            <Image style={styles.imgItem} source={require('../assets/img/roupa.jpg')}/>
            <Text style={styles.desc}>{props.route.params.descricao}</Text>

            <TouchableHighlight style={styles.end}  onPress={()=>props.navigation.navigate('Form')  } >
                <Image style={styles.imgContato} source={require('../assets/img/contato.png')}/>
            </TouchableHighlight>
        </View>
    )
}