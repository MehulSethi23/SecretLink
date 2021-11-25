import React from "react";
import Home from "../components/Home/Home";
import Works from "../components/Works/Works";
import Explanation from "../components/Explanation/Explanation";
import Slack from "../components/Slack/Slack";
import FAQ from "../components/FAQ/FAQ";
import Support from "../components/Support/Support";
import { BrowserRouter as Router, Route } from "react-router-dom";
function Main() {
  return (
    <>
      <div style={{ marginRight: "27%", marginLeft: "27%" }}>
        <Home></Home>
        <Works></Works>
        <Explanation></Explanation>
        <Slack></Slack>
        <FAQ></FAQ>
        <Support></Support>
      </div>
    </>
  );
}

export default Main;
