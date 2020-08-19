import { createMuiTheme } from "@material-ui/core/styles";

const arcLightBlue = "#bbdefb";
const arcLightPink = "#f8bbd0";
const arcLightPurple = "#d1c4e9";

const arcBlue = "#2979ff";
const arcPink = "#ec407a";
const arcPurple = "#7c4dff";

const arcDarkBlue = "#1e88e5";
const arcDarkPink = "#d81b60";
const arcDarkPurple = "#5e35b1";


export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      pink: arcPink,
      purple: arcPurple
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcPink
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem"
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    },
    h1: {
      fontFamily: "Merienda One",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcPink,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcPink
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcPink,
      fontWeight: 700
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcPink
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcPurple
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: arcPurple,
      fontWeight: 300
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcPurple
    },
    learnButton: {
      borderColor: arcPink,
      borderWidth: 2,
      textTransform: "none",
      color: arcPink,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiTableCell: {
      head: {
        fontSize: "1rem",
        fontWeight: 700,
        color: arcPink,
        borderColor: arcDarkPink,
        borderWidth: 2
      },
      body: {
        color: arcPurple,
        borderColor: arcLightBlue,
        borderWidth: 2
      }
    },
    MuiTableSortLabel: {
      root: {
        "&:hover": {
          color: arcLightPink
        },
        "&.MuiTableSortLabel-active": {
          color: arcPink
        }
      },
      icon: {
        fill: arcDarkBlue
      }
    },
    MuiSvgIcon: {
      root: {
        "&.MuiSelect-icon": {
          fill: arcPurple
        }
      }
    },
    MuiFormControlLabel: {
      label: {
        color: arcPurple,
        fontWeight: 700
      },
      labelPlacementStart: {
        marginLeft: 0
      }
    },
    MuiInputLabel: {
      root: {
        color: arcPink,
        fontSize: "1rem"
      }
    },
    MuiInput: {
      root: {
        color: arcPink,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcPink}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcPink}`
        }
      }
    }
  }
});
