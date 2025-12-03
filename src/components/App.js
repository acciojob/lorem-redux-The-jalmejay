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
    <div>

      {/* INTRO TEXT EXACTLY AS CYPRESS EXPECTS */}
      <h1>Below Contains A title and Body gotten froma random API, Please take your time to Review</h1>

      {/* LOADING */}
      {loading && <h4>Loading...</h4>}

      {/* AFTER LOADING SUCCESS */}
      {!loading && !error && (
        <ul>
          <li>{title}</li>
          <li>{body}</li>
        </ul>
      )}

      {/* ERROR */}
      {error && <h4>Error loading data</h4>}

    </div>
  );
};

export default App;
