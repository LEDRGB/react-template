import { createUseStyles } from 'react-jss';
import theme from '../../styles/theme';

export default createUseStyles({
  header: {
    padding: [0, 30],
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: `rgb(0 0 0 / 7%) 0px 2px 13px`,
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    '& a': {
      textDecoration: 'none',
      color: theme.colors.contrast.black,
      fontSize: 18,
      fontWeight: 600,
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
        color: theme.colors.primary.main500,
      },
    },
  },
  logo: {
    height: '100%',
    cursor: 'pointer',
  },
});
