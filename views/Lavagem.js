import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';


export default function Lavagem(props)
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
            height: 60,
            borderRadius: 15,
            borderWidth: 5,
            borderColor: '#61159f',
          },

          btnfirst: {
            backgroundColor: '#7c35b7',
            marginBottom: 20,
            marginTop: 60,
            width: 350,
            height: 60,
            borderRadius: 15,
            borderWidth: 5,
            borderColor: '#61159f',
            
          },

          imgContato: {
            backgroundColor: '#6959CD',
            alignSelf: 'center',
            position: 'absolute',
            top: 90,      
                    
          },
      });

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/img/logotipo-menu.png')}/>

            <Text style={styles.title}>        LAVAGEM</Text>
            <Button buttonStyle={styles.btnfirst} title="ROUPAS DE CASA" onPress={()=>props.navigation.navigate('Interno', {
                nome: 'Roupas de Casa',
                imagem: "require('../assets/img/roupa.jpg')",
                descricao: 'O serviço de lavanderia lava a seco alguns tecidos, entre eles a seda, náilon e lã. Numa lavagem a base de água, como o próprio nome já diz, utiliza água na limpeza. ... O solvente deve ser filtrado ou destilado ao longo do procedimento, o que assegura a conservação da roupa e uma boa limpeza',

            })}/>
            <Button buttonStyle={styles.btn}  title="ROUPAS PESADAS" onPress={()=>props.navigation.navigate('Interno', {
                nome: 'Roupas Pesadas',
                imagem: 'caminho imagem',
                descricao: 'Texto de Descrição',

            })}/>
            <Button buttonStyle={styles.btn}  title="EDREDOM" onPress={()=>props.navigation.navigate('Interno', {
                nome: 'EDREDOM',
                imagem: 'caminho imagem',
                descricao: 'Texto de Descrição',

            })}/>
            
            <Button buttonStyle={styles.btn} title="TAPETE" onPress={()=>props.navigation.navigate('Interno', {
                nome: 'Tapete',
                imagem: 'caminho imagem',
                descricao: 'Texto de Descrição',

            })}/>

            <TouchableHighlight  onPress={()=>props.navigation.navigate('Form')  } >
                <Image style={styles.imgContato} source={require('../assets/img/contato.png')}/>
            </TouchableHighlight>

        </View>
    )
}