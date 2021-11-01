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
  MuiCard: {
    root: {
      backgroundColor: amber[50],
      marginTop: 10,
      color: deepPurple[900],
      "&:hover": {
        backgroundColor: amber[100],
        transform: "translateY(-2%)",
        cursor: "grab",
      },
    },
  },
};

export default theme;
