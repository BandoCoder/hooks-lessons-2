import React, { useReducer, useEffect } from "react";

const initalState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case `FETCH_SUCCESS`:
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case `FETCH_ERROR`:
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    async function getPost() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error(res.status);
        let fetchedPost = await res.json();
        dispatch({ type: `FETCH_SUCCESS`, payload: fetchedPost });
      } catch (error) {
        dispatch({ type: `FETCH_ERROR` });
      }
    }
    getPost();
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
