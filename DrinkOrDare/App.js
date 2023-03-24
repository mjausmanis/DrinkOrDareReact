import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainMenu from "./components/MainMenu";
import Options from "./components/Options";
import PlayerInput from "./components/PlayerInput";
import QuestionPick from "./components/QuestionPick";
import CustomQuestions from "./components/CustomQuestions";
import GameScreen from "./components/GameScreen";
import Scoreboard from "./components/Scoreboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
