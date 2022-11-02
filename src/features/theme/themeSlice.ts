import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface themeState {
  isDark: boolean;
}

// Define the initial state using that type
const initialState: themeState = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      if (state.isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "On");
        return;
      }
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "Off");
    },
    checkTheme: (state) => {
      const localTheme = localStorage.getItem("darkMode");
      if (
        localTheme === "On" ||
        (!("darkMode" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        state.isDark = true;
        document.documentElement.classList.add("dark");
        return;
      }
      state.isDark = false;
      document.documentElement.classList.remove("dark");
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, checkTheme } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme;
