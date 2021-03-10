import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';


interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

export default function OrphanageData() {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [images, setImages] = useState<string[]>([]);
  
  const navigation = useNavigation();

  const route = useRoute();
  const params = route.params as OrphanageDataRouteParams;
  const { latitude, longitude } = params.position;

  function handleNextStep() {
      navigation.navigate('OrphanageVisit', {latitude, longitude, images, name, about});
  }
  async function handleSelectImages() {
    
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Precisamos de acesso ás suas fotos...');
      return ;
    }
    

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if(result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image])
  }
  const handleDeleteImages = (imagemSelecionada: string) => {

    setImages(images.filter(image => image !== imagemSelecionada))

  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <View style={styles.headerStyle}>
        <Text style={styles.title}>Dados</Text>
        <View style={styles.pageStyle}>
          <Text style={styles.pageOne}>1</Text>
          <Text style={styles.pageTwo}> - 2</Text>
        </View>
      </View>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      {/* <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={styles.input}
      /> */}

      <Text style={styles.label}>Fotos</Text>
      <View style={styles.uploadedImagesContainer} >
        
          {images.map( (image, index) => {
            return (
              <LinearGradient 
                style={styles.uploadedImageStyle}
                colors={['#EDFFF666' ,'transparent','#FCF0F466']}
                start={[0.4,0.2]}
                end={[1, 0.5]}
                key={index}
              >
                <View style={styles.uploadedImageJustify}> 
                  <Image
                    
                    source={{uri: image}}
                    style={styles.uploadedImage}
                  />
                  <Text style={styles.uploadedImageText}> imagem_{index}.jpg </Text>
                </View>
                <TouchableOpacity style={styles.uploadedFeatherJustify} onPress={() => handleDeleteImages(image)}>
                  <Feather style={styles.uploadedFeather} name="x" size={24} color="#ff669d"></Feather>
                </TouchableOpacity>
              </LinearGradient>
            )
          })}
        
      </View>
      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      
      <RectButton style={styles.nextButton} onPress={handleNextStep}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageOne: {
    color: '#5c8599',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  pageTwo: {
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