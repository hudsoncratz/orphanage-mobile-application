import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function OrphanageSuccess(){
    const navigation = useNavigation();

    function handleMap() {
        navigation.navigate('OrphanagesMap');
    }

    return(
        <View style={styles.container}>
            <View style={styles.imageCenter}>
                <Image
                    style={styles.successImage} 
                    source={require('../../images/success/success.png')}
                />
            </View>
            <View style={styles.successForm}>
                <Text style={styles.congratulations}>Ebaaa!</Text>
                <Text style={styles.descripton}>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</Text>
                <RectButton style={styles.successButton} onPress={handleMap}>
                    <Text style={styles.successText}>Ok</Text>
                </RectButton>
            </View>   
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#39CC83',
        paddingLeft: 20,
        paddingRight: 20,
    },
    successImage: {
        resizeMode: 'contain',
        height: 280
    },
    imageCenter: {
        flex: 1,
        alignItems: 'center',
        margin: 60
    },
    congratulations: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 40,
        color: '#FFFFFF'
    },
    descripton: {
        marginTop:10,
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 10,
        textAlign: 'center',

    },
    successForm: {
        alignItems: 'center',
        marginBottom: 60
    },
    successButton: {
        width: 120,
        height:56,
        marginTop: 20,
        backgroundColor: '#19C06D',
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    successText: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#FFF',
        fontSize: 15
    }
})