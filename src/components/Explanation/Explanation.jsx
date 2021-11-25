import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import "./explantion.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  button: {
    "&:hover": {
      borderColor: "red",
      border: "1px solid red",
    },
  },
});
function Explanation() {
  const classes = useStyles();
  return (
    <>
      <p className="para">
        <b>
          <Typography
            sx={{ fontWeight: "bold", color: "white" }}
            variant="h2"
            gutterBottom
            component="div"
          >
            Secret links explained
          </Typography>
        </b>
      </p>
      <p style={{ display: "flex" }}>
        <Typography
          sx={{ color: "white" }}
          variant="h5"
          gutterBottom
          component="div"
          color="light"
        >
          We generate two random strings, one to identify your secret <br /> in
          the database and one to encrypt your message in the browser. <br />
          The encryption key is never stored but becomes part of the link
          itself.
          <br /> Without the full link, nobody, including us, will ever be able
          to decrypt
          <br /> your secret.
        </Typography>
      </p>
      <div className="image">
        <img
          src="/images/linkexp.PNG"
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></img>
      </div>
      <Link to="/security" style={{ textDecoration: "none" }}>
        <div className="button">
          <Button
            className={classes.button}
            sx={{
              color: "#de3163",
            }}
          >
            <ArrowRightAltIcon />
            Learn More About Security
          </Button>
        </div>
      </Link>
    </>
  );
}

export default Explanation;
