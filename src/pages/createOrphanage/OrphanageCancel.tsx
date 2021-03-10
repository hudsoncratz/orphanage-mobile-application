import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function OrphanageCancel(){
    const navigation = useNavigation();

    function handleGoBackMap() {
        navigation.navigate('OrphanagesMap');
    }

    return(
        <View style={styles.container}>
            <View style={styles.imageCenter}>
                <Feather name="x" size={40} color="#FF669D"></Feather>
            </View>
            <View style={styles.styleForm}>
                <Text style={styles.cancelForm}>Cancelar cadastro!</Text>
                <Text style={styles.descripton}>Tem certeza que quer cancelar esse cadastro?</Text>
                <View style={styles.buttonSection}>
                    <View style={styles.noBorderButton}>
                        <RectButton style={styles.noButton} onPress={navigation.goBack}>
                            <Text style={styles.noText} >Não</Text>
                        </RectButton>
                    </View>
                    <RectButton style={styles.yesButton} onPress={handleGoBackMap}>
                        <Text style={styles.yesText}>Sim</Text>
                    </RectButton>
                </View>
            </View>   
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF669D',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCenter: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        
        justifyContent: 'center',
        alignItems: 'center',
        
        maxHeight: 64,
        width: 64,
        marginBottom: 20
    },
    cancelForm: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 32,
        color: '#FFFFFF',
        marginBottom: 20
    },
    descripton: {
        marginTop:10,
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    styleForm: {
        alignItems: 'center',
        marginBottom: 60
    },
    buttonSection: {
        marginTop: 20,
        flexDirection: 'row'
    },
    noButton: {
        width: 120,
        height:56,
        backgroundColor: '#FF669D',

        borderRadius: 20,
        borderColor: '#D6487B',
        borderWidth: 1.4,

        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    noBorderButton: {
        borderRadius: 20,
        borderColor: '#D6487B',
        borderWidth: 1.4,
        marginRight: 8,
    },
    noText: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#FFF',
        fontSize: 15
    },
    yesButton: {
        width: 120,
        height:56,
        backgroundColor: '#D6487B',
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    yesText: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#FFF',
        fontSize: 15
    },
})