import {
  GET_LIST_KONTAK,
  ADD_KONTAK,
  DELETE_KONTAK,
  DETAIL_KONTAK,
  UPDATE_KONTAK,
} from "../../actions/KontakAction";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakError: false,

  deleteKontakResult: false,
  deleteKontakLoading: false,
  deleteKontakError: false,

  detailKontakResult: false,

  updateKontakResult: false,
  updateKontakLoading: false,
  updateKontakError: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
        case GET_LIST_KONTAK:
        // console.log("4. Masuk Reducers")
        return {
            ...state,
            getListKontakResult: action.payload.data,
            getListKontakLoading: action.payload.loading,
            getListKontakError: action.payload.error,
        };

        case ADD_KONTAK:
        // console.log("4. Masuk Reducers")
        return {
            ...state,
            addKontakResult: action.payload.data,
            addKontakLoading: action.payload.loading,
            addKontakError: action.payload.error,
        };

        case DELETE_KONTAK:
        console.log("4. Masuk Reducers");
        return {
            ...state,
            deleteKontakResult: action.payload.data,
            deleteKontakLoading: action.payload.loading,
            deleteKontakError: action.payload.error,
        };

        case DETAIL_KONTAK:
        return {
            ...state,
            detailKontakResult: action.payload.data,
        };
        case UPDATE_KONTAK:
        // console.log("4. Masuk Reducers")
        return {
            ...state,
            updateKontakResult: action.payload.data,
            updateKontakLoading: action.payload.loading,
            updateKontakError: action.payload.error,
        };

        default:
        return state;
    }
};

export default kontak;
