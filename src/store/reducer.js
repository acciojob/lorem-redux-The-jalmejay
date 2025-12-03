import {
  FETCH_LOREM_FAILURE,
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
} from "./action";

const instialState = {
  loading: false,
  error: null,
  title: "",
  body: "",
};

export const loremReducer = (state = instialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        title: action.payload.title,
        body: action.payload.body,
      };

    case FETCH_LOREM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
