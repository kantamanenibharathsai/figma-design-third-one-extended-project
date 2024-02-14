import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupStyles } from "./SignupStyles";
import { app } from "../../firebase/Config";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const validate = (values: typeof initialValues) => {
  const errors = {} as typeof initialValues;
  if (values.name === "") {
    errors.name = "Required";
  }
  if (values.password === "") {
    errors.password = "Required";
  }
  if (values.email === "") {
    errors.email = "Required";
  }
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
    errors.email = "Invalid Email";
  }
  return errors;
};

const SignUp = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const onSubmit = async (values: typeof initialValues) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      navigate("/signin");
    } catch (error) {
      alert(error);
    }
  };
  const [passwordType, setPasswordType] = useState("password");
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });
  const renderingEyeIcon = () =>
    passwordType === "text" ? <VisibilityIcon /> : <VisibilityOffIcon />;
  const passwordEyeToggler = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Stack
        component={"form"}
        onSubmit={formik.handleSubmit}
        width={300}
        spacing={2}
      >
        <Typography variant="h4" textAlign={"center"}>
          Sign Up
        </Typography>
        <TextField
          id="name"
          {...formik.getFieldProps("name")}
          placeholder="Enter Your Name"
          error={!!(formik.touched.name && formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="email"
          {...formik.getFieldProps("email")}
          placeholder="Enter Your Email"
          error={!!(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="password"
          id="password"
          type={passwordType}
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          placeholder="Password"
          error={!!(formik.touched.password && formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <IconButton onClick={passwordEyeToggler}>
                {renderingEyeIcon()}
              </IconButton>
            ),
          }}
        />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
        <Typography variant="body1">
          Already Have an Account?
          <Link to={"/signin"} style={signupStyles.linkToText}>
            {" "}
            Sign In Here
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SignUp;
