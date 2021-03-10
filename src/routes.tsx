import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/createOrphanage/SelectMapPosition';
import OrphanagesData from './pages/createOrphanage/OrphanageData';
import OrphanageSuccess from './pages/createOrphanage/OrphanageSuccess';
import OrphanageCancel from './pages/createOrphanage/OrphanageCancel';
import OrphanageVisit from './pages/createOrphanage/OrphanageVisit';

import OrphanageEarthOnboarding from './pages/Onboarding/OrphanageEarthOnboarding';
import OrphanageChildrenOnboarding from './pages/Onboarding/OrphanageChildrenOnboarding';
import Header from './components/Header';


export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#f2f3f5'}}}>
               
                <Screen
                    name="OrphanageEarthOnboarding"
                    component={OrphanageEarthOnboarding}
                />
                <Screen
                    name="OrphanageChildrenOnboarding"
                    component={OrphanageChildrenOnboarding}
                />
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap}
                />
                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanagesDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato"/>
                    }}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown: false,
                        header: () => <Header title="Selecione no mapa"/>
                    }}
                />
                <Screen 
                    name="OrphanageData" 
                    component={OrphanagesData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados"/>
                    }}
                />
                <Screen 
                    name="OrphanageVisit" 
                    component={OrphanageVisit}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados"/>
                    }}
                />
                <Screen
                    name="OrphanageSuccess"
                    component={OrphanageSuccess}
                />
                <Screen
                    name="OrphanageCancel"
                    component={OrphanageCancel}
                />
            </Navigator>
        </NavigationContainer>
    )
}