import { Container } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container maxWidth={'sm'}>
    <Home />
  </Container>
);
