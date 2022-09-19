import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeather } from "../../helpers/api";
// import { LOADING_STATUS } from "../../helpers/constants";

export const fetchWeatherData = createAsyncThunk(
    "data/fetchWeather",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getWeather();
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const dataSlice = createSlice({
    name: 'weather',
    initialState: {
        data: [],
        // loadingStatus: LOADING_STATUS.IDLE,
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchWeatherData.fulfilled]: (state, action) => {
            state.data = action.payload;
            // state.loadingStatus = LOADING_STATUS.FULLFILLED;
        },
        [fetchWeatherData.rejected]: (state, action) => {
            // state.loadingStatus = LOADING_STATUS.REJECTED;
            state.error = action.payload;
        },
        [fetchWeatherData.pending]: (state, action) => {
            // state.loadingStatus = LOADING_STATUS.PENDING;
        },
    }
})

export default dataSlice.reducer;