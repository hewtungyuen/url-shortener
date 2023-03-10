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

const BoldCell = styled(TableCell)({
  fontWeight: "bold",
  color: "white",
});

function ActionButtons({ row, handleDelete, setOpen }) {
  return (
    <ButtonGroup variant="outlined">
      <IconButton onClick={() => handleDelete(row.id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText(
            `${process.env.REACT_APP_BASE_API}/url/${row.id}`
          );
          setOpen(true);
        }}
      >
        <ContentCopyIcon />
      </IconButton>
    </ButtonGroup>
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

  const handleDelete = async (id) => {
    setRefresh(!refresh);
    await api.delete(`/url/${id}`);
  };

  return (
    <>
      <SnackBar
        open={openSnackbar}
        handleClose={handleCloseSnackbar}
        text={"Copied to clipboard!"}
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
                  <TableCell>{row.long_url}</TableCell>
                  <TableCell>
                    <a href={row.long_url}>{row.id}</a>
                  </TableCell>
                  <TableCell>
                    <ActionButtons
                      row={row}
                      handleDelete={handleDelete}
                      setOpen={setOpenSnackbar}
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
