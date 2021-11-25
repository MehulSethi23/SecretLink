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

function Contact() {
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
              Contact
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
            Get in touch!
          </Typography>
        </p>

        <p>
          <b>
            <Typography
              sx={{
                fontWeight: "bold",
                marginTop: "10%",
                color: "white",
                marginBottom: "5%",
              }}
              variant="h3"
              gutterBottom
              component="div"
              color="light"
            >
              Email
            </Typography>
          </b>
        </p>
        <p style={{ display: "flex" }}>
          <Typography
            sx={{ color: "white" }}
            variant="subtitle1  "
            gutterBottom
            component="div"
            color="light"
          >
            General inquiries:{" "}
            <a
              href="mailto:shhh@scrt.link"
              target="_blank"
              style={{ color: " #de3163", textDecoration: "none" }}
            >
              shhh@scrt.link
            </a>
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
            Support:{" "}
            <a
              href="mailto:support@scrt.link"
              target="_blank"
              style={{ color: " #de3163", textDecoration: "none" }}
            >
              support@scrt.link
            </a>
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
            Tech:{" "}
            <a
              href="mailto:x@🤫.st"
              target="_blank"
              style={{ color: " #de3163", textDecoration: "none" }}
            >
              x@🤫.st
            </a>
          </Typography>
        </p>
        <p>
          <b>
            <Typography
              sx={{
                fontWeight: "bold",
                marginTop: "10%",
                color: "white",
                marginBottom: "5%",
              }}
              variant="h3"
              gutterBottom
              component="div"
              color="light"
            >
              Twitter
            </Typography>
          </b>
        </p>
        <p style={{ display: "flex" }}>
          <Typography
            sx={{ color: "white" }}
            variant="subtitle1  "
            gutterBottom
            component="div"
            color="light"
          >
            <a
              href="https://twitter.com/ScrtLink"
              target="_blank"
              style={{ color: " #de3163", textDecoration: "none" }}
            >
              @ScrtLink
            </a>
          </Typography>
        </p>
      </ThemeProvider>
      <br />
    </div>
  );
}

export default Contact;
