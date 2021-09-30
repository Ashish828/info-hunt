import React, { useEffect, useState } from "react";
import { Axios } from "../api/api";
import { API_KEY } from "@env";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        `/news?access_key=${API_KEY}&categories=technology&languages=en`
      );
      setBlogs(response.data.data);
    };
    fetchData();
  }, []);

  return <BlogContext.Provider value={blogs}>{children}</BlogContext.Provider>;
};

export default BlogContext;
