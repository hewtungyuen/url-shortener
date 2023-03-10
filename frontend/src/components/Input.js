import { Button, Stack, TextField } from "@mui/material";

function Input({ handleSubmit, url, setUrl }) {
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack direction={"row"} justifyContent={"center"} spacing={1}>
          <TextField
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            fullWidth
            label="Enter url here"
            
          />
          <Button
            type="submit"
            variant="outlined"
            style={{
              backgroundColor: "#744850",
              color: "white",
              fontWeight: "bold",
            }}
            sx={{ boxShadow: 3 }}
          >
            Shorten
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default Input;
