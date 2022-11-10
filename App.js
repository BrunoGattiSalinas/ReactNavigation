import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Mongagua from './components/Mongagua';
import Santos from './components/Santos';
import Guaruja from './components/Guaruja';
import Campinas from './components/Campinas';
import Peruibe from './components/Peruibe';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mongagua" component={Mongagua} />
        <Stack.Screen name="Santos" component={Santos} />
        <Stack.Screen name="Guaruja" component={Guaruja} />
        <Stack.Screen name="Campinas" component={Campinas} />
        <Stack.Screen name="Peruibe" component={Peruibe} />
      </Stack.Navigator>
    </NavigationContainer>

  );
  


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});