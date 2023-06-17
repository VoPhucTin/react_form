import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  MenuItem,
  Button,
  Switch,
  Paper,
  Container,
  Stack,
  Typography,
  Grid,
  DialogTitle, 
  DialogContent,
  DialogContentText,
  Dialog,
  Alert,
  AlertTitle,
  DialogActions
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Contact() {
  const baseURL = `https://62d10d3fdccad0cf175fa8e5.mockapi.io/api/products`;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  
  const formik = useFormik({
    initialValues: {
      name: "",
      nation: "",
      club: "",
      cost: 0,
      clip: "",
      img: "",
      top: false,
    },
    onSubmit: (values) => {
      fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setOpen(true))
        .catch((error) => console.log(error.message));
    },
    validationSchema: Yup.object({
      validationSchema: Yup.object({
        name: Yup.string()
          .required("Required.")
          .min(2, "Must be 2 characters or more"),
        nation: Yup.string()
          .required("Required.")
          .min(2, "Must be 2 characters or more"),
        club: Yup.string()
          .required("Required.")
          .min(2, "Must be 2 characters or more"),
        program: Yup.number().integer().typeError("Please type a number."),
        description: Yup.string()
          .required("Required.")
          .min(10, "Must be 10 characters or more"),
        clip: Yup.string()
          .required("Required.")
          .min(10, "Must be 10 characters or more"),
        img: Yup.string()
          .required("Required.")
          .min(10, "Must be 10 characters or more"),
      }),
    }),
  });
  return (
    <div className="container">
      <Paper elevation="4" sx={{ width: "100vh" }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing="20px" p="20px">
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Form Contact
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <Typography variant="caption" color="red">
                {formik.errors.name}
              </Typography>
            )}
            <TextField
              margin="dense"
              name="club"
              label="Club"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.club}
              onChange={formik.handleChange}
            />
            {formik.errors.club && (
              <Typography variant="caption" color="red">
                {formik.errors.club}
              </Typography>
            )}
            <TextField
              margin="dense"
              name="nation"
              label="Nation"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.nation}
              onChange={formik.handleChange}
            />

            {formik.errors.nation && (
              <Typography variant="caption" color="red">
                {formik.errors.nation}
              </Typography>
            )}

            <TextField
              margin="dense"
              name="img"
              label="URL of image"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.img}
              onChange={formik.handleChange}
            />

            {formik.errors.img && (
              <Typography variant="caption" color="red">
                {formik.errors.img}
              </Typography>
            )}

            <TextField
              margin="dense"
              name="cost"
              label="Market value"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.cost}
              onChange={formik.handleChange}
            />

            {formik.errors.cost && (
              <Typography variant="caption" color="red">
                {formik.errors.cost}
              </Typography>
            )}

            <TextField
              margin="dense"
              name="clip"
              label="Intro video"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.clip}
              onChange={formik.handleChange}
            />

            {formik.errors.clip && (
              <Typography variant="caption" color="red">
                {formik.errors.clip}
              </Typography>
            )}

            <TextField
              multiline
              rows={2}
              margin="dense"
              name="description"
              label="Information"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.description}
              onChange={formik.handleChange}
            />

            {formik.errors.description && (
              <Typography variant="caption" color="red" display="block">
                {formik.errors.description}
              </Typography>
            )}

            <FormControlLabel
              control={<Switch />}
              label="Top players"
              name="agree"
            />

            <br />

            <Button variant="contained" size="small" type="submit">
              Add
            </Button>

            {/* <Grid container>
              <Grid item xs={5} p={0}>
                <TextField
                  label="Phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                {formik.errors.phone && (
                  <Typography variant="caption" color="red">
                    {formik.errors.phone}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={7}>
                <FormControl sx={{ minWidth: "300px" }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Program of Study
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    label="Program of Stydy"
                    name="program"
                    value={formik.values.program}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={0}>
                      <em>Please select</em>
                    </MenuItem>
                    <MenuItem value={1}>Software Engineering</MenuItem>
                    <MenuItem value={2}>Information System</MenuItem>
                    <MenuItem value={3}>Information Assurance</MenuItem>
                    <MenuItem value={4}>Internet of Things</MenuItem>
                    <MenuItem value={5}>Artificial Intelligence</MenuItem>
                    <MenuItem value={6}>Digital Art & Design</MenuItem>
                  </Select>
                  {formik.errors.program && (
                    <Typography variant="caption" color="red">
                      {formik.errors.program}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
            </Grid> */}

            {/* <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              name="message"
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            {formik.errors.message && (
              <Typography variant="caption" color="red">
                {formik.errors.message}
              </Typography>
            )}
            <FormControlLabel
              control={<Switch />}
              label="Agree to terms and conditions."
              name="agree"
              value={formik.values.agree}
              onClick={formik.handleChange}
            />
            {formik.errors.agree && (
              <Typography variant="caption" color="red">
                {formik.errors.agree}
              </Typography>
            )}
            <Button type="submit">Send</Button> */}
          </Stack>
        </form>
      </Paper>
      <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{"Congraturation"}</DialogTitle>

    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <Alert severity="success">
          <AlertTitle>Adding successful!</AlertTitle>
        </Alert>
      </DialogContentText>
    </DialogContent>

    <DialogActions>
      <Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          Dashboard
        </Link>
      </Button>

      <Button autoFocus onClick={handleClose}>
        Close
      </Button>
    </DialogActions>
  </Dialog>;
    </div>
    // </Container>
  );
}
