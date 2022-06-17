import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import { useFetch, DeleteUser } from "../auth/Functions";
import "../components/Comments.css";
const Comments = ({ id }) => {
  const contactList = useFetch(id);
  console.log(contactList);
  return (
    <div className="comments">
      <h2 className="contact-header">Comments</h2>
      <TableContainer sx={{ maxWidth: 550 }}  component={Paper}>
        <Table aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell align= "center" >Username</TableCell>
              <TableCell align="center">Comment</TableCell>
            </TableRow>
          </TableHead>

          <TableBody align= "center">
            {contactList &&
              contactList.map((item) => (
                <TableRow >
                  <TableCell align= "center" > {item.username} </TableCell>
                  <TableCell align= "center"> {item.comment} </TableCell>
                  <TableCell align= "center" onClick={() => DeleteUser(item.firebaseId)}>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Comments;
