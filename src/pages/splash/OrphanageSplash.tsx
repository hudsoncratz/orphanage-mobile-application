import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';

export default class OrphanageSplash extends React.Component {
    state = {
        appIsReady: false,
    };
  
    async componentDidMount() {
        // Prevent native splash screen from autohiding
        try {
            await SplashScreen.preventAutoHideAsync();
        } catch (e) {
            console.warn(e);
        }
        this.prepareResources();
    }
  
    /**
     * Method that serves to load resources and make API calls
     */
    prepareResources = async () => {
        try {
            await performAPICalls();
            await downloadAssets();
        } catch (e) {
            console.warn(e);
        } finally {
            this.setState({ appIsReady: true }, async () => {
                await SplashScreen.hideAsync();
            });
        }
    };
  
    render() {
        if (!this.state.appIsReady) {
            return null;
        }
  
        return (
            <LinearGradient 
                style={styles.container}
                colors={['#2AB5D1' ,'#00C7C7',]}
                start={[0,0.5]}
                end={[0, 1]}
            >
                <View style={styles.imageCenter}>
                    <Image
                        style={styles.splashLogo} 
                        source={require('../../images/logoSplash/logo-splash.png')}
                    />
                </View>
                <View style={styles.location}>
                    <Text style={styles.city}>Vitória</Text>
                    <Text style={styles.state}>Espírito Santo</Text>
                </View>     
            </LinearGradient>
        );
    }
}
  
// Put any code you need to prepare your app in these functions
async function performAPICalls() {}
async function downloadAssets() {}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    splashLogo: {
        // height: 150,
        resizeMode: 'cover',
    },
    city: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 20,
        color: '#FFFFFF'
    },
    state: {
        marginTop:10,
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 10
    },
    imageCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    location: {
        alignItems: 'center',
        marginBottom: 30,
    }
    
})

// export default function OrphanageSplash(){
//     return (
//         <LinearGradient 
//             style={styles.container}
//             colors={['#2AB5D1' ,'#00C7C7',]}
//             start={[0,0.5]}
//             end={[0, 1]}
//         >
//             <View style={styles.imageCenter}>
//                 <Image
//                     style={styles.splashLogo} 
//                     source={require('../../images/logoSplash/logo-splash.png')}
//                 />
//             </View>
//             <View style={styles.location}>
//                 <Text style={styles.city}>Vitória</Text>
//                 <Text style={styles.state}>Espírito Santo</Text>
//             </View>     
//         </LinearGradient>
//     )

    
// }

