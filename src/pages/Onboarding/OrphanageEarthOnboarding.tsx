import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';

export default function OrphanageEarthOnboarding() {
    const navigation = useNavigation();

    function handleNavagateToChildrenOnboarding() {
        navigation.navigate('OrphanageChildrenOnboarding');
      }  
    return (
        <View style={styles.container}>
            
            <Image
                style={styles.earthImage}
                source={require('../../images/earth/earth.png')}
            />
            <Text style={styles.title}>Leve felicidade para o mundo</Text>
            <Text style={styles.subTitle}> Visite orfanatos e mude o dia de muitas crianças.</Text>
            <View style={styles.footer}>
                <View style={styles.prettyComponent}>
                    <View style={styles.prettyComponentYellow}/>
                    <View style={styles.prettyComponentGray}/>
                </View>
                
                <RectButton style={styles.nextPageButton} onPress={handleNavagateToChildrenOnboarding}>
                    <Feather name="arrow-right" size={25} color="#15B6D6"></Feather>
                </RectButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:40,
        paddingLeft:40,
        paddingRight:60
      },
      title: {
        paddingTop: 20,
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 40,
        color: '#0089A5',
        lineHeight: 40
    },
    subTitle: {
        marginTop:10,
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        color: '#5C8599',
        marginBottom: 10
    },
    earthImage: {
        height: 260,
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
        marginRight: 5
    },
    prettyComponentGray: {
        width: 10,
        height: 5,
        borderRadius:5,
        backgroundColor: '#BECFD8'
    }
})