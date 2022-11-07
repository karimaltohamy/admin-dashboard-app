import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Box, useTheme, TextField } from "@mui/material";
import { tokens } from "../../theme/theme";

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    address1: "",
    adress2: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [errorsForm, setErrorsform] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorsform(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(errorsForm);
    if (Object.keys(errorsForm).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [errorsForm]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.firstname) {
      errors.firstname = "First Name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid eamil format!";
    }
    if (!values.number) {
      errors.number = "Contact Number is required!";
    }
    if (!values.address1) {
      errors.address1 = "Address1 is required!";
    }
    if (!values.address2) {
      errors.address2 = "Address2 is required!";
    }

    return errors;
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box
        mt="20px"
        sx={{
          "& .css-4rjwsv-MuiInputBase-root-MuiFilledInput-root:after": {
            borderBottom: `2px solid ${colors.grey[100]} !important`,
          },
          "& .css-1m1f1hj-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4,minmax(0,1fr))"
          >
            {" "}
            <TextField
              fullWidth
              id="filled-basic"
              label="First Name"
              name="firstname"
              variant="filled"
              value={formValues.firstname}
              onChange={handleChange}
              helperText={
                !errorsForm.firstname ? undefined : errorsForm.firstname
              }
              error={errorsForm.firstname}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Last Name"
              name="lastname"
              variant="filled"
              value={formValues.lastname}
              onChange={handleChange}
              helperText={
                !errorsForm.lastname ? undefined : errorsForm.lastname
              }
              error={errorsForm.lastname}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Email"
              name="email"
              variant="filled"
              value={formValues.email}
              onChange={handleChange}
              helperText={!errorsForm.email ? undefined : errorsForm.email}
              error={errorsForm.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Contact Number"
              name="number"
              type="number"
              variant="filled"
              value={formValues.number}
              onChange={handleChange}
              helperText={!errorsForm.number ? undefined : errorsForm.number}
              error={errorsForm.number}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Address 1"
              name="address1"
              variant="filled"
              value={formValues.address1}
              onChange={handleChange}
              helperText={
                !errorsForm.address1 ? undefined : errorsForm.address1
              }
              error={errorsForm.address1}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Address 2"
              name="address2"
              variant="filled"
              value={formValues.address2}
              onChange={handleChange}
              helperText={
                !errorsForm.address2 ? undefined : errorsForm.address2
              }
              error={errorsForm.address2}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          <Box textAlign="right">
            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: colors.greenAccent[500],
                marginTop: "20px",
                color: colors.primary[500],
                fontWeight: "bold",
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: colors.greenAccent[400],
                },
              }}
            >
              CREATE NEW USER
            </Button> */}
            <button
              style={{
                backgroundColor: colors.greenAccent[500],
                marginTop: "20px",
                color: colors.primary[500],
                fontWeight: "bold",
                fontSize: "14px",
                padding: "12px",
                borderRadius: "5px",
              }}
            >
              CREATE NEW USER
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
