import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import { pink, yellow } from "@mui/material/colors";
import "./home.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
    borderColor: "#de3163",
  },
  button: {
    "&:hover": {
      borderColor: "#de3163",
      border: "1px solid #de3163",
    },
  },
});
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

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: `5px`,
  backgroundColor: `#282828`,

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  boxShadow: "4px",
  borderRadius: "20px",
  color: "whitesmoke",
  margin: "10px",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
function Home() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [name, setName] = React.useState("");
  const handleChangetext = (event) => {
    setName(event.target.value);
  };
  const [pass, setPass] = React.useState("");
  const handleChangepass = (event) => {
    setPass(event.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <img src="/images/logo.PNG" style={{ marginTop: "5%" }}></img>
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
              Share your secret
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
            …with a link that only works{" "}
            <span style={{ color: "#66FF66", fontWeight: "bold" }}>
              one time{" "}
            </span>
            and then <br />
            self-destructs.
          </Typography>
        </p>
      </ThemeProvider>
      <br />
      <div style={{ color: "white" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ color: "white" }}
          >
            <Typography variant="overline" display="block">
              TEXT
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white" }}>
            <Typography>
              <Typography
                variant="overline"
                display="block"
                sx={{
                  color: "#66FF66",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Your Secret
              </Typography>
              <TextField
                required
                sx={{
                  width: "94%",

                  backgroundColor: "#C8C8C8",
                  borderRadius: "5px",
                }}
                id="outlined-name"
                color="success"
                value={name}
                focused
                onChange={handleChangetext}
              />
            </Typography>
            <Typography
              variant="overline"
              display="block"
              sx={{ color: "#de3163", marginTop: "10px", marginBottom: "10px" }}
            >
              Your Password
            </Typography>
            <TextField
              required
              sx={{
                width: "94%",

                backgroundColor: "#C8C8C8",
                borderRadius: "5px",
              }}
              id="outlined-name"
              color="error"
              value={pass}
              type="password"
              focused
              onChange={handleChangepass}
            />
            <Typography
              variant="overline"
              display="block"
              sx={{ color: "#eeff1b", marginTop: "10px" }}
            >
              Read Receipts
            </Typography>
            <div className="rbuttons">
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="type"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="None"
                    control={
                      <Radio
                        sx={{
                          color: yellow[800],
                          "&.Mui-checked": {
                            color: yellow[600],
                          },
                        }}
                      />
                    }
                    label="None"
                  />
                  <FormControlLabel
                    value="Via Email"
                    control={
                      <Radio
                        sx={{
                          color: yellow[800],
                          "&.Mui-checked": {
                            color: yellow[600],
                          },
                        }}
                      />
                    }
                    label="Via Email"
                  />
                  <FormControlLabel
                    value="Via SMS"
                    control={
                      <Radio
                        sx={{
                          color: yellow[800],
                          "&.Mui-checked": {
                            color: yellow[600],
                          },
                        }}
                      />
                    }
                    label="Via SMS"
                  />
                </RadioGroup>
              </FormControl>
              <div className="button">
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="error"
                  sx={{ borderColor: "#de3163" }}
                >
                  <Typography
                    variant="overline"
                    display="block"
                    sx={{ color: "#de3163" }}
                  >
                    create secret links
                  </Typography>
                </Button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ color: "white" }}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            sx={{ color: "white" }}
          >
            <Typography
              sx={{ color: "white" }}
              variant="overline"
              display="block"
            >
              LINK
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white" }}>
            <AccordionDetails sx={{ color: "white" }}>
              <Typography>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{ color: "#66FF66" }}
                >
                  Your Secret
                </Typography>
                <TextField
                  required
                  sx={{
                    width: "94%",
                    borderColor: "white",

                    backgroundColor: "#C8C8C8",
                    borderRadius: "5px",
                  }}
                  id="outlined-name"
                  color="success"
                  value={name}
                  focused
                  onChange={handleChangetext}
                />
              </Typography>
              <Typography
                variant="overline"
                display="block"
                sx={{ color: "#de3163" }}
              >
                Your Password
              </Typography>
              <TextField
                required
                sx={{
                  width: "94%",
                  borderColor: "white",

                  backgroundColor: "#C8C8C8",
                  borderRadius: "5px",
                }}
                id="outlined-name"
                color="error"
                value={pass}
                type="password"
                focused
                onChange={handleChangepass}
              />
              <Typography
                variant="overline"
                display="block"
                sx={{ color: "#eeff1b", marginTop: "10px" }}
              >
                Read Receipts
              </Typography>
              <div className="rbuttons">
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="type"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="None"
                      control={
                        <Radio
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />
                      }
                      label="None"
                    />
                    <FormControlLabel
                      value="Via Email"
                      control={
                        <Radio
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />
                      }
                      label="Via Email"
                    />
                    <FormControlLabel
                      value="Via SMS"
                      control={
                        <Radio
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />
                      }
                      label="Via SMS"
                    />
                  </RadioGroup>
                </FormControl>
                <div className="button">
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="error"
                    sx={{ borderColor: "#de3163" }}
                  >
                    <Typography
                      variant="overline"
                      display="block"
                      sx={{ color: "#de3163" }}
                    >
                      create secret links
                    </Typography>
                  </Button>
                </div>
              </div>
            </AccordionDetails>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ color: "white" }}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            sx={{ color: "white" }}
          >
            <Typography variant="overline" display="block">
              NEOGRAM
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionDetails sx={{ color: "white" }}>
              <Typography>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{ color: "#66FF66" }}
                >
                  Your Secret
                </Typography>
                <TextField
                  required
                  sx={{
                    width: "94%",
                    borderColor: "white",

                    backgroundColor: "#C8C8C8",
                    borderRadius: "5px",
                  }}
                  id="outlined-name"
                  color="success"
                  value={name}
                  focused
                  onChange={handleChangetext}
                />
              </Typography>
              <Typography
                variant="overline"
                display="block"
                sx={{ color: "#de3163" }}
              >
                Your Password
              </Typography>
              <TextField
                required
                sx={{
                  width: "94%",
                  borderColor: "white",

                  backgroundColor: "#C8C8C8",
                  borderRadius: "5px",
                }}
                id="outlined-name"
                color="error"
                value={pass}
                focused
                type="password"
                onChange={handleChangepass}
              />
              <Typography
                variant="overline"
                display="block"
                sx={{ color: "#eeff1b", marginTop: "10px" }}
              >
                Read Receipts
              </Typography>
              <div className="rbuttons">
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="type"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="None"
                      control={
                        <Radio
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />
                      }
                      label="None"
                    />
                    <FormControlLabel
                      value="Via Email"
                      control={
                        <Radio
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />
                      }
                      label="Via Email"
                    />
                    <FormControlLabel
                      value="Via SMS"
                      control={
                        <Radio
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />
                      }
                      label="Via SMS"
                    />
                  </RadioGroup>
                </FormControl>
                <div className="button">
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="error"
                    sx={{ borderColor: "#de3163" }}
                  >
                    <Typography
                      variant="overline"
                      display="block"
                      sx={{ color: "#de3163" }}
                    >
                      create secret links
                    </Typography>
                  </Button>
                </div>
              </div>
            </AccordionDetails>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Home;
