// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  colors: {
    // Define custom colors for dark mode
    dark: {
      text: "#f1f2f6", // Example: white text color for dark mode
    },
    // light: {
    //   text: "#f1f", // Example: white text color for dark mode
    // },
  },
});

export default theme;
