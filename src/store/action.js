export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

const fetchLoremRequest = () => ({ type: FETCH_LOREM_REQUEST });

const fetchLoremSucess = (title, body) => ({
  type: FETCH_LOREM_SUCCESS,
  payload: { title, body },
});

const fetchLoremFailure = (error) => ({
  type: FETCH_LOREM_FAILURE,
  payload: error,
});

export const fetchLorem = () => {
  return (dispatch) => {
    dispatch(fetchLoremRequest());

    fetch("https://api.lorem.com/ipsum")
    // fetch("https://lorem-api.com/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to fetch lorem ipsum data");
        }
        return response.json();
      })
      .then((data) => {
        const title = data.title || data.Title || "";
        const body = data.body || data.Body || "";
        dispatch(fetchLoremSucess(title, body));
      })
      .catch((error) => {
        dispatch(fetchLoremFailure(error.message || "Something went wrong"));
      });
  };
};
