import React from "react";
import { BlogProvider } from "./src/context/blogContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import Header from "./src/components/Header";
import SingleBlogScreen from "./src/Screens/SingleBlogScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerTitle: (props) => <Header {...props} />,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#000",
            cardStyle: { backgroundColor: "#FFFFFF" },
          }}
        />

        <Stack.Screen
          name="SingleBlogScreen"
          component={SingleBlogScreen}
          options={{
            title: "SingleBlogScreen",
            headerTitle: (props) => <Header {...props} />,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            cardStyle: { backgroundColor: "#FFFFFF" },
            headerBackTitle: "back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
