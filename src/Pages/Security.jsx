import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

function Security() {
  useEffect(() => {
    {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  });
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
              Security
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
            Best practices, no extras.
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
            All messages are end-to-end encrypted. We generate a random hash to
            encrypt your secret on the client using AES-256 (Advanced Encryption
            Standard). The encryption key is never stored, but added to the
            secret link itself. Without the full link, nobody (including us)
            will ever be able to decrypt your message.
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
            If a password is provided, we use it to encrypt your secret on top
            of the standard encryption. The password is not being stored. Even
            with the most advanced attacks (e.g. man in the middle attack) and
            access to all our infrastructure an attacker couldn't read your
            message. After a secret has been viewed, we delete it permanently
            from our database. There is no backup.
          </Typography>
        </p>
        <img
          src="/images/linkexp.PNG"
          style={{ marginTop: "5%", marginBottom: "3%" }}
        ></img>
        <p style={{ display: "flex" }}>
          <Typography
            sx={{ color: "white", fontWeight: "bold" }}
            variant="h6"
            gutterBottom
            component="div"
            color="light"
          >
            Security by design
          </Typography>
        </p>
        <p style={{ display: "flex" }}>
          <Typography
            sx={{ color: "white" }}
            variant="subtitle1"
            gutterBottom
            component="div"
            color="light"
          >
            <ul>
              <li style={{ marginBottom: "3%" }}>
                All connections are secured via HTTPS
              </li>
              <li style={{ marginBottom: "3%" }}>
                All data is stored encrypted (not only secrets)
              </li>
              <li style={{ marginBottom: "3%" }}>
                As little third-party code as possible
              </li>
              <li style={{ marginBottom: "3%" }}>
                Dependencies are checked and updated regularly
              </li>
            </ul>
          </Typography>
        </p>
      </ThemeProvider>
      <br />
    </div>
  );
}

export default Security;
