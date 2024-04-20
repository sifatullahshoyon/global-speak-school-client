import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import theme from "./components/Theme/theme";
import AuthProviders from "./providers/AuthProviders";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <ChakraProvider theme={theme} resetCSS={true}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <RouterProvider router={router} />
          <ToastContainer />
        </ChakraProvider>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
