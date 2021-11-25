import React from "react";
import "./slack.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import DoneIcon from "@mui/icons-material/Done";
const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  button: {
    "&:hover": {
      borderColor: "red",
      border: "1px solid red",
      fontSize: "90%",
    },
  },
  button1: {
    "&:hover": {
      borderColor: "red",
      fontSize: "90%",
    },
  },
});

function Slack() {
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
            The Slack App
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", color: "#de3163" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            NEW
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
          Some things better not stay in your chat history. <br />
          Next time a coworker asks you for an access token, <br />
          API key or password, you can respond in good conscience.
        </Typography>
      </p>
      <img
        src="/images/slack.PNG"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          marginTop: "2%",
        }}
      ></img>
      <div className="text">
        <DoneIcon
          sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
        />
        <Typography
          variant="overline"
          display="block"
          sx={{ color: "white", fontSize: "1em", marginTop: "2%" }}
        >
          Encrypted, disposable messages, stored outside of Slack.
        </Typography>
      </div>
      <div className="text">
        <DoneIcon
          sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
        />
        <Typography
          variant="overline"
          display="block"
          sx={{ color: "white", fontSize: "1em", marginTop: "2%" }}
        >
          Create one-time secrets via shortcut or slash command.
        </Typography>
      </div>
      <div className="text">
        <DoneIcon
          sx={{ color: "#de3163", marginRight: "1%", marginTop: "2.8%" }}
        />
        <Typography
          variant="overline"
          display="block"
          sx={{ color: "white", fontSize: "1em", marginTop: "2%" }}
        >
          Burn notification after a secret has been viewed.
        </Typography>
      </div>
      <div className="buttons">
        <Button
          className={classes.button}
          href="https://slack.com/intl/en-in/workspace-signin"
          target="_blank"
          variant="outlined"
          color="error"
          sx={{ borderColor: "#de3163" }}
        >
          <Typography
            variant="contain"
            display="block"
            sx={{ color: "#de3163" }}
          >
            ADD TO SLACK
          </Typography>
        </Button>
      </div>
    </>
  );
}

export default Slack;
