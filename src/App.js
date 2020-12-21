import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContatoList from './views/ContatoList';
import ContatoForm from './views/ContatoForm';
import {Button, Icon} from 'react-native-elements';
import {ContatosProvider} from './context/contatoContext';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <ContatosProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ContatoList}
          screenOptions={screenOptions}>
          <Stack.Screen
            name="ContatoList"
            component={ContatoList}
            options={({navigation}) => {
              return {
                title: 'Lista de Contatos',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('ContatoForm')}
                    type="clear"
                    icon={<Icon name="add" color="white" size={25} />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="ContatoForm"
            component={ContatoForm}
            options={() => {
              return {
                title: 'Formulário de Contatos',
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContatosProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
};
