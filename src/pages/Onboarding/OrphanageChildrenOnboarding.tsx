import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native'

export default function OrphanageChildrenOnboarding() {
    const navigation = useNavigation();

    function handleNavagateToOrphanagesMap() {
        navigation.navigate('OrphanagesMap');
    }  
   
    return (
        <View style={styles.container}>
            
            <Image
                style={styles.childrenImage}
                source={require('../../images/children/children.png')}
            />
            <Text style={styles.title}>Escolha um orfanato no mapa e faça uma visita</Text>
            <View style={styles.footer}>
                <View style={styles.prettyComponent}>
                    <View style={styles.prettyComponentGray}/>
                    <View style={styles.prettyComponentYellow}/>
                </View>
                
                <RectButton style={styles.nextPageButton} onPress={handleNavagateToOrphanagesMap}>
                    <Feather name="arrow-right" size={25} color="#15B6D6"></Feather>
                </RectButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:50,
        paddingLeft:40,
        paddingRight:40
    },
    title: {
        paddingTop: 20,
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 30,
        color: '#0089A5',
        textAlign: 'right',
        lineHeight: 35
    },
    childrenImage: {
        height: 350,
        resizeMode: 'contain',
    },
    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
    
        backgroundColor: 'transparent',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
    
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nextPageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#D1EDF2',
        borderRadius: 20,
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    prettyComponent: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    prettyComponentYellow: {
        width: 20,
        height: 5,
        borderRadius:5,
        backgroundColor: '#FFD152',
        marginLeft: 5
    },
    prettyComponentGray: {
        width: 10,
        height: 5,
        borderRadius:5,
        backgroundColor: '#BECFD8'
    }
})