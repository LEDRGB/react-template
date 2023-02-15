import { FC } from 'react';
import useStyles from './styles';


const Home: FC = () => {
  const classes = useStyles();

  return <div className={classes.container}>MAIN SCREEN</div>
};

export default Home;
