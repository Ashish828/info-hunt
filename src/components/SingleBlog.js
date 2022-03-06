import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { TouchableOpacity } from "react-native-gesture-handler";
import notFound from "../../assets/not-found.png";

const SingleBlog = ({ data, navigation }) => {
  let [fontsLoaded, error] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("SingleBlogScreen", {
          title: data.title,
        })
      }
    >
      <View style={styles.SingleBlogContainer}>
        <View>
          {data.image === "None" ? (
            <Image source={notFound} style={styles.blogImage} />
          ) : (
            <Image source={{ uri: data.image }} style={styles.blogImage} />
          )}
        </View>
        <View style={styles.constainer2}>
          <Text style={styles.category}>{data.category}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.author}>
            <Text style={{ fontWeight: "700" }}>Author: </Text>
            {data.author === null ? "unknown" : data.author}
          </Text>
          <Text style={styles.date}>{data.published?.split(" ")[0]}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  blogImage: {
    width: 160,
    height: 160,
  },
  SingleBlogContainer: {
    flexDirection: "row",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    paddingBottom: 10,
  },
  constainer2: {
    paddingRight: 45,
    marginLeft: 10,
    flex: 1,
  },
  category: {
    color: "#878787",
    fontFamily: "Poppins_500Medium",
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 15,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    textTransform: "capitalize",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
  },
  author: {
    fontFamily: "Poppins_500Medium",
    textTransform: "capitalize",
    fontSize: 15,
    fontWeight: "500",
    color: "#434343",
    marginBottom: 5,
  },
  date: {
    color: "#878787",
    fontFamily: "Poppins_500Medium",
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 12,
  },
});

export default SingleBlog;
