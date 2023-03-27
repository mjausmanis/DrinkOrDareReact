import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from 'react'
import MainMenu from "./Screens/MainMenu";
import Options from "./Screens/Options";
import PlayerInput from "./Screens/PlayerInput";
import QuestionPick from "./Screens/QuestionPick";
import CustomQuestions from "./Screens/CustomQuestions";
import GameScreen from "./Screens/GameScreen";
import Scoreboard from "./Screens/Scoreboard";
import { lightTheme, darkTheme } from "./Theme/Themes";

const Stack = createNativeStackNavigator();

export const ThemeContext = React.createContext();

export default function App() {  
  const [theme, setTheme] = useState('Light');
  const themeData = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={theme == 'Light' ? lightTheme : darkTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="PlayerInput" component={PlayerInput} />
          <Stack.Screen name="QuestionPick" component={QuestionPick} />
          <Stack.Screen name="CustomQuestions" component={CustomQuestions} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="Scoreboard" component={Scoreboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
