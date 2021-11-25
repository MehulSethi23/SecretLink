// import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <Stack spacing={2} direction="row" className="header">

//     </Stack>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#de3163",
      contrastText: "#fff",
    },
    light: {
      main: "#66FF66",
      contrastText: "#fff",
    },
  },
});

function Header() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const [burgerstate, setburgerstate] = useState(true);
  return (
    <div>
      <Container>
        {/* <Menu>
         
        </Menu> */}
        <Rightmenu className={`${show && "navblack"}`}>
          <ThemeProvider theme={theme}>
            <Button
              variant="text"
              color="light"
              onClick={() => {
                burgerstate === true
                  ? setburgerstate(false)
                  : setburgerstate(true);
              }}
            >
              <Custommenu></Custommenu>
              Menu
            </Button>
            {show && (
              <img
                src="/images/logo.PNG"
                style={{
                  width: "30px",
                  height: "30px",
                  margin: "5%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
              />
            )}
          </ThemeProvider>
        </Rightmenu>
        <Burgernav show={burgerstate}>
          <Closewrapper>
            <Customclose onClick={() => setburgerstate(true)} />
          </Closewrapper>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>{" "}
          <li>
            <Link to="/security" style={{ textDecoration: "none" }}>
              Security
            </Link>
          </li>{" "}
          <li>
            <Link to="/privacy" style={{ textDecoration: "none" }}>
              Privacy
            </Link>
          </li>{" "}
          <li>
            <Link to="/faq" style={{ textDecoration: "none" }}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </li>
        </Burgernav>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Rightmenu = styled.div`
  display: flex;
  justify-content: flex-end;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;

    padding: 10px;
  }
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const Custommenu = styled(MenuIcon)`
  cursor: pointer;
  margin-right: 3px;
`;

const Burgernav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #282828;
  width: 300px;
  color: #de3163;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(100%)" : "translateX(0)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid #66ff66;
    color: #de3163;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  a {
    font-weight: 600;
    color: #de3163;
    text-decoration: none;
  }
`;

const Customclose = styled(CloseIcon)`
  cursor: pointer;
`;

const Closewrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  // flex-direction: row-reverse;
  // align-items: right;
`;
const Li = styled.div`
  color: #de3163;
  font
`;
