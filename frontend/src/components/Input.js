import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Input() {
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(url);
  };
  
  return (
    <>
      <Typography variant="h5">Input</Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack direction={"row"} justifyContent={"center"} spacing={1}>
          <TextField
            onChange={(event) => setUrl(event.target.value)}
            fullWidth
            label="Enter url here"
          />
          <Button type="submit" variant="contained">
            Shorten
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default Input;
