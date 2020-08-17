import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "7em",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      height: "5.5em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "5.5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  root: {
    zIndex: theme.zIndex.modal + 1,
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: "6.3em",
    padding: "0 30px",
    [theme.breakpoints.down("md")]: {
      height: "5.5em"
    },
    [theme.breakpoints.down("sm")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.5em",
    },
  },
}));

function DeepChild() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar disableGutters>
          <img
            src="../../seherLogo.png"
            alt="Project Manager Logo"
            className={classes.logo}
          />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

const themeInstance = {
  background: "linear-gradient(45deg, #ec407a 20%, #7c4dff 60%, #2979ff 90% )",
};

export default function Theming() {
  return (
    <ThemeProvider theme={themeInstance}>
      <DeepChild />
    </ThemeProvider>
  );
}
