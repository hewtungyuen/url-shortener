import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function SnackBar({ open, handleClose, text }) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {text}
      </MuiAlert>
    </Snackbar>
  );
}
