import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import contatoContext from '../context/contatoContext';

export default ({route, navigation}) => {
  const [contato, setContato] = useState(route.params ? route.params : {});
  const {dispatch} = useContext(contatoContext);
  return (
    <View style={style.form}>
      <Text>Nome:</Text>
      <TextInput
        style={style.input}
        onChangeText={(nome) => setContato({...contato, nome})}
        placeholder="Informe o nome completo"
        value={contato.nome}
      />
      <Text>Telefone:</Text>
      <TextInput
        style={style.input}
        onChangeText={(fone) => setContato({...contato, fone})}
        placeholder="Informe o telefone"
        value={contato.fone}
      />
      <Text>E-mail:</Text>
      <TextInput
        style={style.input}
        onChangeText={(email) => setContato({...contato, email})}
        placeholder="Informe o e-mail"
        value={contato.email}
      />
      <Text>Url Avatar:</Text>
      <TextInput
        style={style.input}
        onChangeText={(avatarUrl) => setContato({...contato, avatarUrl})}
        placeholder="Informe a URL do avatar"
        value={contato.avatarUrl}
      />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: contato.id ? 'updateContato' : 'createContato',
            payload: contato,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
});
