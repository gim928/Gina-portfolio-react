import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutMe from "./pages/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
//   useQuery,
//   gql,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Route exact path="/">
        <AboutMe />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Footer />
    </HashRouter>
  );
}

export default App;
