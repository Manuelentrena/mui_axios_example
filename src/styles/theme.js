import { createTheme } from "@material-ui/core";
import { deepPurple, amber } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[500],
    },
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
  MuiCard: {
    raised: true,
  },
};

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 5,
      textTransform: "none",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: amber[500],
        color: deepPurple[900],
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
  MuiPaper: {
    root: {
      margin: "0.5rem",
      padding: 0,
    },
  },
  MuiGrid: {
    root: {
      /* height: "100%", */
    },
  },
  MuiCard: {
    root: {
      height: "100%",
      backgroundColor: amber[50],
      /* marginTop: 10, */
      color: deepPurple[900],
      "&:hover": {
        backgroundColor: amber[100],
        transform: "translateY(-2%)",
        cursor: "grab",
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  MuiCardContent: {
    root: {
      margin: "1rem",
      padding: 0,
    },
  },
  MuiCardActions: {
    root: {
      margin: "1rem",
      padding: 0,
    },
  },
};

export default theme;
