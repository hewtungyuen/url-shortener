import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ButtonGroup, IconButton } from "@mui/material";
import api from "../axiosConfig";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SnackBar from "./SnackBar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const BoldCell = styled(TableCell)({
  fontWeight: "bold",
  color: "white",
});

function ActionButtons({ row, handleOpenDialog, setOpenSnackbar }) {
  return (
    <ButtonGroup variant="outlined">
      <IconButton onClick={handleOpenDialog}>
        <DeleteIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText(
            `${process.env.REACT_APP_BASE_API}/url/${row.id}`
          );
          setOpenSnackbar(true);
        }}
      >
        <ContentCopyIcon />
      </IconButton>
    </ButtonGroup>
  );
}

function DeleteConfirmationDialog({ open, handleClose, handleDelete, id }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm deletion?"}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={async () => await handleDelete(id)} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function BasicTable({ urls, refresh, setRefresh }) {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const [openDialog, setOpenDialog] = React.useState(false);
  const [idToDelete, setIdToDelete] = React.useState("");

  const handleOpenDialog = (id) => {
    setOpenDialog(true);
    setIdToDelete(id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = async (id) => {
    await api.delete(`/url/${id}`);
    setRefresh(!refresh);
    handleCloseDialog();
  };

  return (
    <>
      <SnackBar
        open={openSnackbar}
        handleClose={handleCloseSnackbar}
        text={"Copied to clipboard!"}
      />
      <DeleteConfirmationDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleDelete={handleDelete}
        id={idToDelete}
      />
      <TableContainer component={Paper} sx={{ boxShadow: 6 }}>
        <Table sx={{ minWidth: 650, boxShadow: 6 }} aria-label="simple table">
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "35%" }} />
            <col style={{ width: "35%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <TableHead sx={{ backgroundColor: "#744850" }}>
            <TableRow>
              <BoldCell>Date</BoldCell>
              <BoldCell>Original URL</BoldCell>
              <BoldCell>Shortened URL</BoldCell>
              <BoldCell>Actions</BoldCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls &&
              urls.map((row) => (
                <TableRow
                  sx={{
                    "&:nth-of-type(odd)": { backgroundColor: "#DEDEDE" },
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                  key={row.id}
                >
                  <TableCell component="th" scope="row">
                    {row.date.slice(0, 10)}
                  </TableCell>
                  <TableCell>
                    <div style={{ overflow: "auto", width: "300px" }}>
                      {row.long_url}
                    </div>
                  </TableCell>
                  <TableCell>
                    <a href={row.long_url}>{row.id}</a>
                  </TableCell>
                  <TableCell>
                    <ActionButtons
                      row={row}
                      handleOpenDialog={() => handleOpenDialog(row.id)}
                      setOpenSnackbar={setOpenSnackbar}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
