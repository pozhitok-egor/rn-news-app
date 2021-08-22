import React, {useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";

const Stack = createNativeStackNavigator();

const customFonts = {
  "BungeeShade-Regular": require("./assets/fonts/BungeeShade-Regular.ttf"),
  "BalsamiqSans-Bold": require("./assets/fonts/BalsamiqSans-Bold.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={() => Font.loadAsync(customFonts)}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  } else {
    return (
      <Provider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{contentStyle: {backgroundColor: "#fff"}}}
            initialRouteName="Home"
          >
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Post"
              component={ShowScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
