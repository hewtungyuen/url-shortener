import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import api from "../axiosConfig";


export default function BasicTable() {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    api
      .get("/url")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setUrls(data);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <colgroup>
          <col style={{ width: "15%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Original URL</TableCell>
            <TableCell>Shortened URL</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls && urls.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.date.slice(0,10)}
              </TableCell>
              <TableCell>{row.long_url}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
