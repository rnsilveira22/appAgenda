import React, {useContext} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {Button, Icon, ListItem} from 'react-native-elements';
import ContatosContext from '../context/contatoContext';

export default (props) => {
  const {state, dispatch} = useContext(ContatosContext);

  function confirmeContatoDelete(contato) {
    Alert.alert('Excluir Contato', 'Deseja realmente excluir o contato ?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteContato',
            payload: contato,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }
  function getAction(contato) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('ContatoForm', contato)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmeContatoDelete(contato)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }
  function getContatoItem({item: contato}) {
    return (
      <ListItem
        leftAvatar={{source: {uri: contato.avatarUrl}}}
        key={contato.id}
        title={contato.nome}
        subtitle={contato.fone}
        bottomDivider
        rightElement={getAction(contato)}
        onPress={() => props.navigation.navigate('ContatoForm', contato)}
      />
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={(contato) => contato.id.toString}
        data={state.contatos}
        renderItem={getContatoItem}
      />
    </View>
  );
};
