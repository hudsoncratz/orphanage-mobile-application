import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';


interface OrphanageVisitRouteParams {
  images: string[],
  name: string,
  about: string,
  latitude: number,
  longitude: number
}

export default function OrphanageVisit() {

  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const navigation = useNavigation();

  const route = useRoute();
  const params = route.params as OrphanageVisitRouteParams;

  

  async function handleCreateOrphanage() {
    const latitude = params.latitude;
    const longitude = params.longitude;
    const name = params.name;
    const about = params.about;
    const images = params.images;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,

      } as any)
    })

    await api.post('orphanages', data);
    
    navigation.navigate('OrphanageSuccess');
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>

<View style={styles.headerStyle}>
        <Text style={styles.title}>Visitação</Text>
        <View style={styles.pageStyle}>
          <Text style={styles.pageOne}>1</Text>
          <Text style={styles.pageTwo}> - 2</Text>
        </View>
      </View>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={opening_hours}
        onChangeText={setOpeningHours}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTwo: {
    color: '#5c8599',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  pageOne: {
    color: '#5c8599',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
    opacity: 0.6
  },
  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
  },
  headerStyle: {
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageStyle: {
    flexDirection: 'row'
  },
  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  uploadedImagesContainer: {
    flexDirection: 'column',
  },
  uploadedImageStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadedImageJustify: {
    flexDirection: 'row',
  },
  uploadedImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 6,
    marginTop: 6,
    marginRight: 6,
    marginLeft: 6,
  },
  uploadedImageText: {
    marginTop: 10,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
    color: '#37C77F'
  },
  uploadedFeather: {
    justifyContent: 'center', 
    marginRight: 12
  },
  uploadedFeatherJustify: {
    justifyContent: 'center'
  },
  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})