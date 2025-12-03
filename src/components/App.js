// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../store/action";

const App = () => {
  const dispatch = useDispatch();
  const { loading, error, title, body } = useSelector((state) => state);

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Lorem Redux</h1>

      {loading && <p>Loading lorem ipsum...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <>
          {/* Title from API */}
          <h2>{title}</h2>

          {/* Body from API – inside <p> as required */}
          <p>{body}</p>
        </>
      )}
    </div>
  );
};

export default App;
