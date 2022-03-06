import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import BlogContext from "../context/blogContext";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import SingleBlog from "../components/SingleBlog";
import { categories } from "../categories";
import Select from "../components/Select";

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded, error] = useFonts({
    Poppins_500Medium,
  });
  const [data, setData] = useContext(BlogContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.blogsContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5%",
        }}
      >
        <Text style={styles.blogsHead}>Your daily update</Text>
        <Select categories={categories} setData={setData} data={data} />
      </View>

      <FlatList
        data={data.blogs}
        keyExtractor={(data) => data.url}
        renderItem={({ item }) => {
          return <SingleBlog data={item} navigation={navigation} />;
        }}
      />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  blogsContainer: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  blogsHead: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
  },
});

export default HomeScreen;
