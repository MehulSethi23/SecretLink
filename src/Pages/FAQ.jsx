import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";

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
function FAQ() {
  useEffect(() => {
    {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  });
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
              FAQ
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
            Frequently Asked Questions
          </Typography>
        </p>
        <hr style={{ color: "gray" }}></hr>
      </ThemeProvider>
      <br />
      <div
        style={{ marginBottom: "3%", marginTop: "7%", borderRadius: "10px" }}
      >
        <p style={{ display: "flex" }}>
          <Typography
            sx={{ color: "white", fontWeight: "bold" }}
            variant="h5"
            gutterBottom
            component="div"
            color="light"
          >
            General
          </Typography>
        </p>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#202020", color: "white" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              variant="subtitle2"
              sx={{ width: "33%", flexShrink: 0 }}
            >
              Why should I use this service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#202020", color: "white" }}>
            <Typography>
              Sharing secrets is delicate. You don't want sensitive information
              (confidential information, passwords, API keys, access tokens, key
              combinations, confessions, etc.) to stay in your Slack channel,
              Whatsapp chat log, inbox, or any other communication channel. A
              one-time disposable link guarantees that your secret is only
              viewed exactly once, before being permanently destroyed.
              <br />
              <br /> Use this service in case you want to… <br />
              <ul>
                <li>Share your Netflix password with a family member.</li>
                <li>Send a private message from a public computer.</li>
                <li>Send access tokens, API keys, PIN codes to a coworker.</li>
                <li>Confess to a secret crush.</li>
                <li>Transmit information that could be used against you.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#202020", color: "white" }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#202020", color: "white" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              variant="subtitle2"
            >
              Who is it for?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#202020", color: "white" }}>
            <Typography>
              Essentially everybody. Everybody should care about privacy.
              <br /> The means to transmit sensitive information anonymously is
              especially crucial for journalists,
              <br /> lawyers, politicians, whistleblowers, people who are being
              oppressed, etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#202020", color: "white" }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#202020", color: "white" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              variant="subtitle2"
            >
              How does the service work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#202020", color: "white" }}>
            <Typography>
              After you submit the form your secret will be encrypted and
              stored. You can now share the generated short link via text
              message, email or whatever service you trust. (We recommend
              Signal, Threema or Matrix.) After the recipients clicks the link,
              the message gets displayed and permanently removed from the
              database. <br />
              <br />
              For <span style={{ fontWeight: "bold" }}>extra security</span>,
              you can include a password that will be needed to decrypt the
              message. (We recommend to share the password via a different
              channel than the link.)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#202020", color: "white" }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#202020", color: "white" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              variant="subtitle2"
            >
              Can I get notified when a secret has been viewed?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#202020", color: "white" }}>
            <Typography>
              Yes, you can get{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                SMS or Email notifications
              </span>{" "}
              with an account.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#202020", color: "white" }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#202020", color: "white" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              variant="subtitle2"
            >
              How secure is this service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#202020", color: "white" }}>
            <Typography>
              All messages are end-to-end encrypted using AES-256, which is
              virtually impenetrable using brute-force methods. AES would take
              billions of years to break using current computing technology. For
              the highest level of security, an optional password (which is
              never stored either) will be used to encrypt your message.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#202020", color: "white" }}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#202020", color: "white" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              variant="subtitle2"
            >
              Can I retrieve a secret that has already been visited?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#202020", color: "white" }}>
            <Typography>
              Nope. It's a one time secret. We show it once and then delete it
              permanently from the database. There is no backup. It's gone for
              good.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#202020", color: "white" }}
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#202020", color: "white" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel7bh-content"
            id="panel8bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              variant="subtitle2"
            >
              Can the recipient save the message?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#202020", color: "white" }}>
            <Typography>
              Sure. You can always take a screenshot. The idea behind this
              service is to securely share sensitive information one time. We
              (obviously) don't have control over what a recipient does with the
              message.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
