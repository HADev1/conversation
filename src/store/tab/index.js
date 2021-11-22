import {TABS} from "../../utils/app";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  currentTab: TABS.chat
};

const tabsSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    tabSwitched: (tabs, actions) => {
      const {payload} = actions;
      if (payload !== tabs.current)
        tabs.currentTab = payload;
    }
  }
});

const {tabSwitched} = tabsSlice.actions;
export default tabsSlice.reducer;

export const onSwitchTab = tab => {
  return tabSwitched(tab);
};