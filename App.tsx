import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Toaster } from 'sonner-native';
import HomeScreen from "./screens/HomeScreen"
import AIChatScreen from "./screens/AIChatScreen"
import ExpertConsultationScreen from "./screens/ExpertConsultationScreen"
import LegalResourcesScreen from "./screens/LegalResourcesScreen"
import CaseTrackerScreen from "./screens/CaseTrackerScreen"
import UrgentHelpScreen from "./screens/UrgentHelpScreen"

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AIChat" component={AIChatScreen} />
      <Stack.Screen name="ExpertConsultation" component={ExpertConsultationScreen} />
      <Stack.Screen name="LegalResources" component={LegalResourcesScreen} />
      <Stack.Screen name="CaseTracker" component={CaseTrackerScreen} />
      <Stack.Screen name="UrgentHelp" component={UrgentHelpScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    userSelect: "none"
  }
});