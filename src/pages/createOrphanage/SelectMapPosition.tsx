import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, MapEvent } from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';
import { LinearGradient } from 'expo-linear-gradient';

export default function SelectMapPosition() {
  
  const navigation = useNavigation();
  const [position, setPosition] = useState({latitude: 0, longitude: 0 });
  const [displayView, setDisplayView] = useState(true)
  
  function handleNextStep() {
    navigation.navigate('OrphanageData', {position});
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (

    <View style={styles.container}>
      {displayView ? 
      <TouchableOpacity 
        style={styles.buttonTapContainer}
        onPress={() => {
          setDisplayView(false)
          navigation.setOptions({ headerShown: true })
        }}

      >
        <LinearGradient 
            style={styles.tapContainer}
            colors={['#2AB5D1CC' ,'#00C7C7CC',]}
            start={[0,0]}
            end={[1, 1]}
        >
            <View style={styles.imageCenter}>
                <Image
                    style={styles.tapHere} 
                    source={require('../../images/tapHere/tapHere.png')}
                />
                <Text style={styles.tapText}>Toque no mapa para adicionar um orfanato</Text>
            </View>  
        </LinearGradient>
      </TouchableOpacity>
      : null}
      <MapView 
        initialRegion={{
          latitude: -20.273234,
          longitude: -40.2973718,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker 
            icon={mapMarkerImg}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
          />
        )}
      </MapView>
      {position.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tapContainer: {
    flex: 1
  },
  buttonTapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 20,
  },
  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  },
  tapHere: {
      // height: 150,
      resizeMode: 'cover',
  },
  tapText: {
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 25,
      color: '#FFFFFF',
      textAlign: 'center',

      width: 250,
      marginTop: 20
},
  imageCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
})