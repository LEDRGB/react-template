import withStyles from 'react-jss';
import styles from './styles';
// import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Root = (props: any) => {
  return (
    <div className={props.classes.root}>
      <Header />
      <Outlet />
    </div>
  );
};

export default withStyles(styles)(Root);
