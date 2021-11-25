import React from "react";

import "./support.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";

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

function Support() {
  const classes = useStyles();
  return (
    <>
      <b>
        <div className="para">
          <Typography
            sx={{ fontWeight: "bold", color: "white" }}
            variant="h2"
            gutterBottom
            component="div"
          >
            Support us
          </Typography>
        </div>
      </b>
      <p style={{ display: "flex" }}>
        <Typography
          sx={{ color: "white" }}
          variant="h5"
          gutterBottom
          component="div"
          color="light"
        >
          For only $1.00 a month you get full access to all current <br /> and
          upcoming features. A free account gets you the essentials.
        </Typography>
      </p>
      <div className="alltext">
        <div className="text">
          <DoneIcon
            sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
          />
          <Typography
            variant="h6"
            display="flex"
            sx={{
              color: "white",
              fontSize: "1em",
              marginTop: "2%",
              width: "200px",
            }}
          >
            Unlimited Secrets
          </Typography>
        </div>
        <div className="text">
          <DoneIcon
            sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
          />
          <Typography
            variant="h6"
            display="block"
            sx={{
              color: "white",
              fontSize: "1em",
              marginTop: "2%",
              width: "200px",
            }}
          >
            Slack App
          </Typography>
        </div>
      </div>
      <div className="alltext">
        <div className="text">
          <DoneIcon
            sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
          />
          <Typography
            variant="h6"
            display="flex"
            sx={{
              color: "white",
              fontSize: "1em",
              marginTop: "2%",
              width: "200px",
            }}
          >
            Increased character limit
          </Typography>
        </div>
        <div className="text">
          <DoneIcon
            sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
          />
          <Typography
            variant="h6"
            display="block"
            sx={{
              color: "white",
              fontSize: "1em",
              marginTop: "2%",
              width: "200px",
            }}
          >
            Browser extensions
          </Typography>
        </div>
      </div>
      <div className="alltext">
        <div className="text">
          <DoneIcon
            sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
          />
          <Typography
            variant="h6"
            display="flex"
            sx={{
              color: "white",
              fontSize: "1em",
              marginTop: "2%",
              width: "200px",
            }}
          >
            SMS read receipts
          </Typography>
        </div>
        <div className="text">
          <DoneIcon
            sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
          />
          <Typography
            variant="h6"
            display="block"
            sx={{
              color: "white",
              fontSize: "1em",
              marginTop: "2%",
              width: "200px",
            }}
          >
            Secret files (late 2021)
          </Typography>
        </div>
      </div>
      <div className="alltext">
        <div className="text">
          <DoneIcon
            sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
          />
          <Typography
            variant="h6"
            display="flex"
            sx={{
              color: "white",
              fontSize: "1em",
              marginTop: "2%",
              width: "200px",
            }}
          >
            Email service
          </Typography>
        </div>
        <div className="text">
          <DoneIcon
            sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
          />
          <Typography
            variant="h6"
            display="block"
            sx={{
              color: "white",
              fontSize: "1em",
              marginTop: "2%",
              width: "200px",
            }}
          >
            More to come…
          </Typography>
        </div>
      </div>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <div className="buttons">
          <Button
            className={classes.button}
            variant="outlined"
            sx={{
              color: "white",
              border: "1px solid #de3163",
            }}
          >
            Contact Us
          </Button>
        </div>
      </Link>
    </>
  );
}

export default Support;
