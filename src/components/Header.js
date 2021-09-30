import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const Header = ({ children }) => {
  let [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header1}>Info Hunt</Text>

      <Text style={styles.header1}>
        {children !== "SingleBlogScreen" ? children : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  header1: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },
});

export default Header;
