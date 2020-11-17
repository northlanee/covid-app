import API from "../../api";

const SET_TOTAL = "TOTAL/SET_TOTAL";
const SET_LOADING = "TOTAL/SET_LOADING";

const initialState = {
  overall: {
    confirmed: null,
    critical: null,
    deaths: null,
    recovered: null,
    date: null,
    error: null,
  },
  loading: false,
};

export const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL:
      return {
        ...state,
        overall: {
          ...state.overall,
          confirmed: action.payload.confirmed,
          critical: action.payload.critical,
          deaths: action.payload.deaths,
          recovered: action.payload.recovered,
          date: new Date(action.payload.lastUpdate).getTime(),
        },
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
const setLoading = (isLoading) => ({ type: SET_LOADING, payload: isLoading });

export const fetchTotal = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const total = await API.fetchTotal();
    if (!total) throw new Error(total);
    dispatch(setTotal(total[0]));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
  }
};
