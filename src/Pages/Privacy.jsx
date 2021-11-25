import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#de3163",
      contrastText: "#fff",
    },
    light: {
      main: "#FFFFFF",
      contrastText: "#fff",
    },
  },
});
const useStyles = makeStyles({
  button: {
    backgroundColor: "#de3163",
    color: "white",
    display: "flex",

    "&:hover": {
      backgroundColor: "#de3163",
      color: "white",
      borderColor: "red",
      border: "2px solid red",
    },
  },
});
function Privacy() {
  useEffect(() => {
    {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  });
  const classes = useStyles();
  return (
    <div style={{ marginRight: "27%", marginLeft: "27%" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src="/images/logo.PNG" style={{ marginTop: "5%" }}></img>
      </Link>
      <ThemeProvider theme={theme}>
        <p>
          <b>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h2"
              gutterBottom
              component="div"
              color="primary"
            >
              Privacy
            </Typography>
          </b>
        </p>

        <p style={{ display: "flex" }}>
          <Typography
            sx={{ color: "white" }}
            variant="h4"
            gutterBottom
            component="div"
            color="light"
          >
            No ads, no tracking, no bullshit.
          </Typography>
        </p>
        <p style={{ display: "flex" }}>
          <Typography
            sx={{ color: "white" }}
            variant="subtitle1  "
            gutterBottom
            component="div"
            color="light"
          >
            For us, privacy is not negotiable. We carefully choose and limit our
            tools in order to protect everyone's right to privacy. We don't use
            ads, we don't track individuals, we don't sell data and we keep
            personal data requirements at the bare minimum. Even with an
            account, we'd never ask for personally identifiable information
            (PII) without a good reason. On top of that, we use privacy by
            design principles: We structured our database in a way that a single
            secret remains a completely independent entity - even while using a
            user account, a secret can never be traced back to you.
          </Typography>
        </p>
        <p>
          <b>
            <Typography
              sx={{
                fontWeight: "bold",
                marginTop: "15%",
                color: "white",
                marginBottom: "5%",
              }}
              variant="h3"
              gutterBottom
              component="div"
              color="light"
            >
              Account & Cookies
            </Typography>
          </b>
        </p>
        <p style={{ display: "flex", marginBottom: "10%" }}>
          <Typography
            sx={{ color: "white" }}
            variant="subtitle1  "
            gutterBottom
            component="div"
            color="light"
          >
            For power users, we offer user accounts that require authentication.
            You can create an account with only an email address (You may use a
            temporary or masked email) - no further information is mandatory.
            <br />
            <br />
            For people visiting our website, we only ever use essential cookies.
            In other words, cookies that are necessary for providing core
            functionalities: E.g. managing secure authentication. Read more in
            our Privacy Policy.
          </Typography>
        </p>
      </ThemeProvider>
    </div>
  );
}

export default Privacy;
