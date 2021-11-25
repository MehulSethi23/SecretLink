import React from "react";
import Typography from "@mui/material/Typography";
import "./works.css";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";

const steps = [
  {
    label: "WRITE",
    description: `Compose your secret and get a one-time link.`,
    src: "/images/write.PNG",
  },
  {
    label: "SHARE",
    description: "Send the generated link to your confidant.",
    src: "/images/share.PNG",
  },
  {
    label: "BURN",
    description: `After the secret has been viewed, it gets destroyed.`,
    src: "/images/burn.PNG",
  },
];

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

function Works() {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
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
            How it works
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
          Create end-to-end encrypted, one-time secrets with ease: <br />
          Add your message and submit the form. That's it.
          <br />
          You'll get a secret link to share with your confidant.
        </Typography>
      </p>
      <div className="box">
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              pl: 2,
              bgcolor: "#de3163",
              borderRadius: "4px",
            }}
          >
            <Typography
              gutterBottom
              component="div"
              sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
            >
              {steps[activeStep].label}
            </Typography>
          </Paper>
          <Box
            sx={{
              height: 255,
              maxWidth: 400,
              width: "100%",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="image">
              <img src={steps[activeStep].src} />
            </div>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              sx={{ color: "white" }}
            >
              {steps[activeStep].description}
            </Typography>
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ bgcolor: "#de3163", borderRadius: "4px" }}
            nextButton={
              <Button
                size="small"
                sx={{ color: "#66FF66" }}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                sx={{ color: "#66FF66" }}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>
      <div className="buttons">
        <Button
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
          className={classes.button}
          variant="outlined"
          sx={{
            color: "white",
            border: "1px solid #de3163",
          }}
        >
          Create A Secret
        </Button>
      </div>
    </>
  );
}

export default Works;
