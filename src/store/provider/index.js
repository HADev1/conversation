import {createSelector, createSlice} from "@reduxjs/toolkit";
import * as apiActions from "../api";
import {REDUX_STORE, SERVER_ROUTES} from "../../utils/app";

const initialState = {
  list: [],
  isLoading: false
};

const providerSlice = createSlice({
  name: "provider",
  initialState,
  reducers: {
    providersRequested: (providers, actions) => {
      providers.isLoading = true;
    },
    providersReceived: (providers, actions) => {
      providers.list = actions.payload.providers;
      providers.isLoading = false;
    },
    providerRemoved: (providers, actions) => {
      providers.list = providers.list.filter(provider => provider.user.id !== actions.payload);
    }
  }
});

const {providersRequested, providersReceived, providerRemoved} = providerSlice.actions;
export default providerSlice.reducer;

// SELECTORS
export const getFilteredProviders = createSelector(
  state => state.search.searchText,
  state => state.provider.list,
  (searchMsg, providers) => {
    return providers.filter(provider => provider.user.name.toLowerCase().includes(searchMsg));
  }
);

// ACTIONS
export const loadProviders = () => (dispatch, getState) => {
  const actionDispatch = () => {
    dispatch(
      apiActions.apiCallBegan({
        url: SERVER_ROUTES.provider.getAllProvidersForUser,
        onStart: providersRequested.type,
        onSuccess: providersReceived.type
      })
    );
  };

  if (!REDUX_STORE.provider.isEnableCache) {
    actionDispatch();
    return;
  }

  const {provider} = getState();
  if (!provider.list || provider.list.length === 0) {
    actionDispatch();
  }
};

export const removeProvider = (userId) => {
  return providerRemoved(userId);
};