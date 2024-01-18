import {View, Text} from 'react-native';
import React from 'react';
import SettingScreen from './src/screens/setting';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AccountAndSercurityScreen from './src/screens/account_and_sercurity';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Setting">
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen
          name="AccountAndSercurity"
          component={AccountAndSercurityScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <SettingScreen />
    // </View>
  );
};

export default App;
