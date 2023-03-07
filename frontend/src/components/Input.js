import { Button, Stack, TextField, Typography } from "@mui/material";

function Input() {
  return (
    <>
      <Typography variant="h5">Input</Typography>

      <Stack direction={'row'} justifyContent={'center'} spacing={1}>
        <TextField fullWidth label="Enter url here" />
        <Button variant="contained">Shorten</Button>
      </Stack>
    </>
  );
}

export default Input;
