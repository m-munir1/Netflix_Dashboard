import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  updateMovieFailure,
  updateMovieStart,
  updateMovieSuccess,
} from "./MovieActions";
import axiosconfig from "../../config/axiosconfig";

// Get
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axiosconfig.get(
      "/movies"
      // , {
      //   headers: {
      //     token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      //   },
      // }
    );
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

// Create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axiosconfig.post(
      "/movies/",
      movie
      // , {
      //   headers: {
      //     token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      //   },
      // }
    );
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

// Update
export const updateMovie = async (id, movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await axiosconfig.put("/movies/" + id, movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateMovieFailure());
  }
};

// Delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axiosconfig.delete(
      "/movies/" + id
      // , {
      //   headers: {
      //     token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      //   },
      //  }
    );
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
