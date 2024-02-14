import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../../assets/google-logo.png";

import { signinStyles } from "./SignInStyles";
import { app } from "../../firebase/Config";
const initialValues = {
  userName: "",
  password: "",
};
const validate = (values: typeof initialValues) => {
  const errors = {} as typeof initialValues;
  if (values.userName === "") {
    errors.userName = "Required";
  }
  if (values.password === "") {
    errors.password = "Required";
  }
  return errors;
};

const SignIn = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const onSubmit = (values: typeof initialValues) => {
    signInWithEmailAndPassword(auth, values.userName, values.password)
      .then((response) => {
        const email = response.user.email;
        localStorage.setItem("user", JSON.stringify(email));
        navigate("/");
      })
      .catch((error) => alert(error));
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider).then((response) => {
      const email = response.user.email;
      localStorage.setItem("user", JSON.stringify(email));
      navigate("/");
    });
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
          Sign In
        </Typography>
        <TextField
          name="userName"
          id="userName"
          onChange={formik.handleChange}
          value={formik.values.userName}
          onBlur={formik.handleBlur}
          placeholder="Username or Email"
          error={!!(formik.touched.userName && formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
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
          SignIn
        </Button>
        <Typography variant="body1">
          Don't You Have Account?
          <Link to={"/signup"} style={signinStyles.linkToText}>
            {" "}
            Create Here
          </Link>
        </Typography>
        <Divider orientation="horizontal"> Login With</Divider>
        <IconButton sx={signinStyles.GoogleLogoSize} onClick={googleSignIn}>
          <Box component={"img"} src={GoogleLogo} width={30} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default SignIn;



// 1. Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
// 2. Given a m x n matrix, filled with x's and o's, find the largest square containing only x's and return its area. if there are no x's in the entire matrix print 0
// 3. merge sort algorithm
// 4. 