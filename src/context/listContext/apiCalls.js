import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListFailure,
  updateListStart,
  updateListSuccess,
} from "./ListActions";
import axiosconfig from "../../config/axiosconfig";

// Get
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axiosconfig.get("/lists/all", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

// Create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axiosconfig.post("/lists/", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

// Update
export const updateList = async (id, list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axiosconfig.put("/lists/" + id, list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFailure());
  }
};

// Delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axiosconfig.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
