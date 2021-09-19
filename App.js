import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import firebase from './src/firebaseConnection';

export default function App() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((value) => {
        // alert(value.user.uid)
        firebase.database().ref('usuarios').child(value.user.uid).set({
          nome: name
        })

        ToastAndroid.show('Cadastrado com sucesso', ToastAndroid.SHORT)

        setName('');
        setEmail('');
        setSenha('');
      })
      .catch((error) => {
        alert('Algo deu errado! 😵')
      })
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <View style={ styles.container }>
        <StatusBar style="auto" />
        <Text style={ styles.title }>Nome</Text>
        <TextInput
          style={ styles.textInput }
          value={ name }
          onChangeText={ (nome) => setName(nome) }
        />

        <Text style={ styles.title }>E-mail</Text>
        <TextInput
          style={ styles.textInput }
          value={ email }
          onChangeText={ (email) => setEmail(email) }
        />

        <Text style={ styles.title }>Senha</Text>
        <TextInput
          style={ styles.textInput }
          value={ senha }
          onChangeText={ (senha) => setSenha(senha) }
        />

        <TouchableOpacity style={ styles.btn } onPress={ cadastrar }>
          <Text style={ styles.textBtn }>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#fff',
    height: 40,
    fontSize: 17,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 8,
    borderColor: '#c2c2c2',
    elevation: 3,
  },
  btn: {
    width: '100%',
    height: 40,
    backgroundColor: '#195aff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  }
});
