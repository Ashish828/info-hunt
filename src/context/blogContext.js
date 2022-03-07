import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "@env";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [state, setState] = useState({
    category: "general",
    blogs: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}&category=${state.category}`
      );
      setState((prevState) => ({ ...prevState, blogs: response.data.news }));
    };
    fetchData();
  }, [state.category]);

  return (
    <BlogContext.Provider value={[state, setState]}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
