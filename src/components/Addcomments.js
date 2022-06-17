import React from "react";
import { TextField, InputAdornment, Button, Stack, Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const Addcomments = ({ info, setInfo, handleFormSubmit }) => {
  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    console.log(name, value);
    setInfo({ ...info, [name]: value });
  };

  return (
    <Box style={{ backgroundColor: "white", padding: "20px", justifyContent: "center", display: "flex" }}>
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={3} direction="column">
          <TextField
          sx={{ width: 550 }}
            variant="outlined"
            name="username"
            value={info.username}
            onChange={handleChange}
            placeholder="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            name="comment"
            value={info.comment}
            onChange={handleChange}
            placeholder="Share Your Comment"
          />

          <Button variant="contained" type="submit" value="Submit">
            Add Your Comment
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Addcomments;
