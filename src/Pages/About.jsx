import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

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

function About() {
  useEffect(() => {
    {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  });
  return (
    <>
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
                About
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
              The whole project is based on a simple premise: <br />
              The less we know, the better.
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
              It all started with the idea to send private messages in a fun
              way. Messages that don't persist. Think Snapchat, but without
              giving away your user data. The idea grew into a project that
              could be summarized as "Sharing secrets as a service". There are
              similar products out there - in fact, some have been a great
              inspiration. However, what sets scrt.link apart is the combination
              of all the great ideas and concepts around security and privacy,
              with the attention on design and user experience. Stay tuned -
              there is for more come!
            </Typography>
          </p>
          <p>
            <b>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginTop: "20%",
                  color: "white",
                  marginBottom: "5%",
                }}
                variant="h3"
                gutterBottom
                component="div"
                color="light"
              >
                Philosophy
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
              Freedom of speech, freedom of the press, and the right to privacy
              are among the most important civil liberties in a free society.
              With this project we empower you to exchange information over the
              internet in truly secure and private way. This product is made in
              a way that respects people's integrity and privacy all the way. We
              have no interest in you! Not in you as a person, nor in your
              secrets. Read more on our Privacy page.
            </Typography>
          </p>
          <p>
            <b>
              <Typography
                sx={{ fontWeight: "bold", marginTop: "20%", color: "white" }}
                variant="h3"
                gutterBottom
                component="div"
                color="light"
              >
                User Accounts
              </Typography>
            </b>
          </p>
          <p style={{ display: "flex", marginTop: "5%" }}>
            <Typography
              sx={{ color: "white" }}
              variant="h4"
              gutterBottom
              component="div"
              color="light"
            >
              On why we offer free and premium accounts.
            </Typography>
          </p>
          <p style={{ display: "flex", marginTop: "4%" }}>
            <Typography
              sx={{ color: "white" }}
              variant="subtitle1  "
              gutterBottom
              component="div"
              color="light"
            >
              The main reason we offer accounts is to prevent spam and fraud.
              All core features are free of charge and don't require an account.
              That said, some features do require basic authentication (We just
              ask for an email address - we don't mind you using a temporary
              email address). These features include sending information via
              email or SMS. Accounts help us prevent abuse of the underlying
              systems. Paid premium accounts are meant for power users and
              people who like to support this project.
            </Typography>
          </p>
        </ThemeProvider>
        <br />
      </div>
    </>
  );
}

export default About;
