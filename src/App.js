import "./App.css";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Pricing from "./Pages/Pricing";
import Privacy from "./Pages/Privacy";
import Security from "./Pages/Security";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/security" component={Security} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
