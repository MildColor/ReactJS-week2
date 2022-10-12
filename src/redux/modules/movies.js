// Action Value
const ADD_MOVIES = "ADD_MOVIES";

// Action Creator
export const addMovies = (payload) => {
  return {
    type: ADD_MOVIES,
    payload,
  };
};

// Initial State
const initialState = {
  movieList: [],
};

// Reducer
const movies = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      // 인자로 받아온 action.todo값을 state의 todo배열에 넣어준다.
      return { ...state, movieList: [...state.movieList, ...action.payload] };

    default:
      return state;
  }
};

// export default reducer
export default movies;
