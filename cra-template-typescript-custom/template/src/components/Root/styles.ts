import theme from "../../styles/theme";

const styles: any = {
  '@global': {
    body: {
      height: '100%',
      width: '100%',
      padding: 0,
      margin: 0,
      fontFamily: theme.font,
    },
    '#root': {
      height: '100%',
    },
    html: {
      height: '100%',
      width: '100%',
    },
  },
  root: {
    width: '100%',
    height: '100%',
    userSelect: 'none',
    padding: 0,
    margin: 0,
  },
  '*': {
    boxSizing: 'border-box',
  },
};

export default styles;
