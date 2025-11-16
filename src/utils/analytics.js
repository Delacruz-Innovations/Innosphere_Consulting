import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-JJ7L25T8TX"); // Replace with your Measurement ID
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};