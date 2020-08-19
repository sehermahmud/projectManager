import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    background: "linear-gradient(45deg, #7c4dff 20%, #ec407a 60%, #2979ff 90% )",
    width: "100%",
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        alt="black decorative slash"
        src="/assets/footerAdornment.png"
        className={classes.adornment}
      />
    </footer>
  );
}