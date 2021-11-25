import React from "react";
import Box from "@mui/material/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function Footer() {
  return (
    <>
      <Box
        top={0}
        width="100%"
        marginTop="5%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          width: "100%",
          height: 300,
          backgroundColor: "#151c24",
          boxShadow: "inset 0 10px 40px hsl(0deg 0% 0% / 20%)",
        }}
      >
        <Typography
          sx={{
            fontWeight: "5px",
            color: "gray",
            marginBottom: "1%",
            fontWeight: "bold",
            marginTop: "2%",
          }}
          variant="subtitle2"
          gutterBottom
          component="div"
        >
          Secrets created: 3,652 | viewed: 2,850 | compromised: 0
        </Typography>

        <Tooltip title="Twitter">
          <IconButton href="https://twitter.com/ScrtLink" target="_blank">
            <TwitterIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>

        <Typography
          sx={{
            fontWeight: "5px",
            color: "gray",
            marginRight: "27%",
            marginLeft: "27%",
            marginTop: "1%",
          }}
          variant="subtitle2"
          gutterBottom
          component="div"
        >
          Scrt.link lets you share sensitive information online. End-to-end
          encrypted. One time.
        </Typography>
        <Typography
          sx={{
            fontWeight: "5px",
            color: "gray",
            marginRight: "27%",
            marginLeft: "27%",
          }}
          variant="subtitle2"
          gutterBottom
          component="div"
        >
          Keep confidential information out of email, Slack, Teams, Whatsapp or
          any other communication channel.
        </Typography>
        <Typography
          sx={{
            fontWeight: "5px",
            color: "gray",
            marginRight: "27%",
            marginLeft: "27%",
            marginBottom: "2%",
          }}
          variant="subtitle2"
          gutterBottom
          component="div"
        >
          A one-time disposable link guarantees your secrets can only ever be
          accessed once - before being destroyed forever.
        </Typography>
        <Typography
          sx={{ fontWeight: "5px", color: "gray", marginBottom: "2%" }}
          variant="subtitle2"
          gutterBottom
          component="div"
        >
          ©2021 SANTiHANS GmbH Imprint Privacy Policy Cookie Policy
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
