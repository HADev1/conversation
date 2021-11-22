import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchText: ""
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchTextChanged: (search, actions) => {
      search.searchText = actions.payload;
    }
  }
});

const {searchTextChanged} = searchSlice.actions;
export default searchSlice.reducer;

export const onSearchTextChanged = (searchMsg) => {
  return searchTextChanged(searchMsg);
};