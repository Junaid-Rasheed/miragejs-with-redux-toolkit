import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


export const fetchUserById = createAsyncThunk(
  "number/fetchUserById",
  async (data, thunkAPI) => {
    console.log("hit api");
    const response = await fetch('/api/randomNumber');
    return await response.data;
  }
);


const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    isLoading : false
  },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state,action) => {
      //state.value = 10;
       state.isLoading = false;
       state.value += action.payload;
       console.log('state fulfilled')
    },
    [fetchUserById.pending]: (state) => {
     state.isLoading = true;
     console.log('is pending ')
    },
    [fetchUserById.rejected]: (state) => {
      console.log('error occured')
       state.isLoading = false;
    },
  },
});


export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions
export default counterSlice.reducer
