import { Container, Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Libre Franklin", "sans-serif"].join(","),
    fontWeight: 510,
    allVariants: {
      color: "#01161e",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Typography variant="h5" sx={{ bgcolor: "#744850", color:'white', p: 3 }}>
      GoWhere URL Shortener
    </Typography>
    <Container maxWidth={false} sx={{ p: 2 }}>
      <Typography variant="h5" align={"center"} padding={2} fontWeight={'bold'}>
        Please enter your URL here :
      </Typography>
      <Container sx={{ height: "100vh" }} maxWidth={"md"}>
        <Home />
      </Container>
    </Container>
  </ThemeProvider>
);
