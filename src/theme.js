import { createMuiTheme } from '@material-ui/core/styles';

export const Version = 1;
const colors = {
  primaryColor: '#4D4DD0',
  secondaryColor: '#DF1E2E'
};

const baseTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: colors.primaryColor
    },
    secondary: {
      main: colors.secondaryColor
    }
  },
  colors: {
    ...colors
  }
});

export const muiTheme = {
  ...baseTheme,
  overrides: {
    MuiTypography: {
      root: {
        overflowWrap: 'break-word'
      },
      colorInherit: {
        color: 'white'
      }
    }
  }
};
