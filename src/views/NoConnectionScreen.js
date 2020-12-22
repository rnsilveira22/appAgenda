import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';

const NoConnetionScreen = (props) => {
    return (
        <View style={style.container}>
            <Text>Sem Conexão</Text>
            <Image source={{
                uri: 'http://www.w3.org/2000/svg'
            }}
            style={{
                width: '50%' ,
                height: '30%' ,
            }}
            resizeMode='contain'/>
            <Button title="Reload Page" onPress={props.onCheck}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NoConnetionScreen
