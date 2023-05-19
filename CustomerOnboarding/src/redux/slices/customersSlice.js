import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customersList: [],
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, { payload }) => {
      state.customersList = [
        ...state.customersList,
        {
          ...payload,
          onboardingStatus: "inProgress",
          id: state.customersList.length + 1,
        },
      ];
    },
    updateOnboardingStatus: (state, { payload }) => {
      state.customersList[payload.index].onboardingStatus = payload.status;
    },
    updateCustomer: (state, { payload }) => {
      state.customersList = state.customersList.map((customer) => {
        if (customer.id === payload.id) {
          return {
            ...customer,
            ...payload,
          };
        }
        return customer;
      });
    },
    deleteCustomer: (state, { payload }) => {
      state.customersList = state.customersList.filter(
        (customer) => customer.id !== payload
      );
    },
  },
});

export const {
  addCustomer,
  deleteCustomer,
  updateCustomer,
  updateOnboardingStatus,
} = customersSlice.actions;

export default customersSlice.reducer;
