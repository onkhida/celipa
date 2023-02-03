import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Icon from "react-native-ionicons";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ReceiptScreen from "./screens/ReceiptScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Profile") {
              iconName = "contact";
            } else if (route.name === "Receipt") {
              iconName = "list";
            }

            // Tab Icons and Colors
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <Icon ios={`ios-${iconName}`} android={`md-${iconName}`} />;
          },

          tabBarActiveTintColor: "#219AF4",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Receipt" component={ReceiptScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
