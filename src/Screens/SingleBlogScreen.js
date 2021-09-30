import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import BlogContext from "../context/blogContext";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const SingleBlogScreen = ({ route }) => {
  let [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const data = useContext(BlogContext);
  const singleBlog = data.filter((blog) => blog.title === route.params.title);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View>
      {singleBlog.length > 0 &&
        singleBlog.map((blog) => (
          <View key={Math.random()}>
            <Image source={{ uri: blog.image }} style={styles.blogImage} />
            <Text style={styles.title}>{blog.title}</Text>
            <View style={styles.authorAndDate}>
              <Text style={styles.author}>
                <Text style={{ fontWeight: "500" }}>Wriiten by: </Text>
                {blog.author === null ? "unknown" : blog.author}
              </Text>
              <Text style={styles.date}>
                {new Date(blog.published_at).toDateString()}
              </Text>
            </View>
            <Text style={styles.description}>{blog.description}</Text>
          </View>
        ))}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  blogImage: {
    width: "100%",
    height: "40%",
    marginBottom: 5,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    textTransform: "capitalize",
    fontSize: 40,
    fontWeight: "600",
    paddingHorizontal: 10,
  },
  authorAndDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  author: {
    fontFamily: "Poppins_500Medium",
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "700",
    color: "#434343",
  },
  date: {
    color: "#878787",
    fontFamily: "Poppins_500Medium",
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 14,
  },
  description: {
    color: "#555555",
    fontFamily: "Poppins_400Regular",
    fontWeight: "400",
    paddingHorizontal: 10,
    fontSize: 20,
    lineHeight: 31,
  },
});

export default SingleBlogScreen;