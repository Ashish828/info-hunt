import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import BlogContext from "../context/blogContext";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import NotFound from "../../assets/not-found.png";

const SingleBlogScreen = ({ route }) => {
  let [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const [data, setData] = useContext(BlogContext);
  const singleBlog = data.blogs.filter(
    (blog) => blog.title === route.params.title
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.outer}>
        {singleBlog.length > 0 &&
          singleBlog.map((blog) => (
            <View key={Math.random()}>
              {blog.image === "None" ? (
                <Image source={NotFound} style={styles.blogImage} />
              ) : (
                <Image source={{ uri: blog.image }} style={styles.blogImage} />
              )}

              <Text style={styles.title}>{blog?.title}</Text>
              <View style={styles.authorAndDate}>
                <Text style={styles.author}>
                  <Text style={{ fontWeight: "500" }}>Wriiten by: </Text>
                  {blog?.author === null ? "unknown" : blog?.author}
                </Text>
                <Text style={styles.date}>{blog.published?.split(" ")[0]}</Text>
              </View>
              <Text style={styles.description}>{blog?.description}</Text>
              <Text
                style={{ color: "blue", marginBottom: 30, textAlign: "center" }}
                onPress={() => Linking.openURL(blog.url)}
              >
                View more
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  blogImage: {
    width: "100%",
    height: 400,
    marginBottom: 5,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    textTransform: "capitalize",
    fontSize: 35,
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
    paddingBottom: 10,
  },
  container: {
    flexGrow: 1,
    height: 700,
  },
  outer: {
    flex: 1,
    borderWidth: 4,
  },
  inner: {
    flexGrow: 1,
  },
});

export default SingleBlogScreen;
