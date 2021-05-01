import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-elements';

import { Formik } from 'formik';

export default function Form(props)
{
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },

        input: {
            borderWidth: 1,
            borderColor: '#ddd',
            padding: 10,
            fontSize: 18,
            borderRadius: 6,
            width: 200,
            marginBottom:20
        },

        inputMessage: {
            borderWidth: 1,
            borderColor: '#ddd',
            padding: 10,
            fontSize: 18,
            borderRadius: 6,
            height: 80,
            marginBottom:40

        },

        btn: {
            backgroundColor: '#7c35b7',
            marginBottom: 20,
            width: 250,
            height: 60,
            borderRadius: 15,
            borderWidth: 5,
            borderColor: '#61159f',
          },

          title: {
            fontSize: 46,
            marginBottom: 30,
        },

        title2: {
            fontSize: 26,
            marginBottom: 30,
        },
    });

    return(
        <View style={styles.container}>

            <Formik 
                initialValues= {{ title: '' , email: '', service: '', message: ''}}
                onSubmit= { (values) => {
                    console.log(values);
                }}
                >

                    {(formProps) => (
                        <View>
                            <Text style={styles.title}>   Contato</Text>
                            <Text style={styles.title2}>Envie sua mensagem</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Nome'
                                onChangeText={formProps.handleChange('title')}
                                value={formProps.values.title}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder='E-mail'
                                onChangeText={formProps.handleChange('email')}
                                value={formProps.values.email}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder='Serviço'
                                onChangeText={formProps.handleChange('service')}
                                value={formProps.values.service}
                            />

                            <TextInput
                                style={styles.inputMessage}
                                multiline
                                placeholder='Mensagem'
                                onChangeText={formProps.handleChange('message')}
                                value={formProps.values.message}
                            />


                            <Button buttonStyle={styles.btn} title="Enviar" onPress={formProps.handleSubmit} ></Button>
    

                        </View>
                    )}

            </Formik>
            {/* <TextInput value="Nome" onChangeText={text => props.setFieldValue('nome', text)}/>
        
            <TextInput value="email" onChangeText={text => props.setFieldValue('email', text)} />

            <TextInput value="selecionar serviço" onChangeText={text => props.setFieldValue('service', text)}/>

            <TextInput value="mensagem" onChangeText={text => props.setFieldValue('message', text)}/>
        
            <Button
            // onPress={props.handleSubmit}
            title="Enviar"
            /> */}
            
      </View>
    )
}