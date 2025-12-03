import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../store/action";

const App = () => {
  const dispatch = useDispatch();
  const { loading, error, title, body } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      
      {/* TEST 1: INTRO TEXT */}
      <h1>A short Naration of Lorem Ipsum</h1>

      {/* TEST 3: LOADING STATE */}
      {loading && <h4>Loading...</h4>}

      {/* ERROR */}
      {error && <h4 style={{ color: "red" }}>Error: {error}</h4>}

      {/* TEST 2 + TEST 4: POSTS AS <li> */}
      {!loading && !error && (
        <ul>
          <li><strong>{title}</strong>: {body}</li>
        </ul>
      )}
    </div>
  );
};

export default App;
