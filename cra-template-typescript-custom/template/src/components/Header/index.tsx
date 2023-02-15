import React, { memo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vocab from '../../vocabulary';
import useStyles from './styles';


const Header: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.header}>
        <img onClick={() => navigate('/')} src="/logo.jpeg" alt={vocab.alt.logo} className={classes.logo} />
        <div className={classes.links}>
          <NavLink to={'/home'}>{vocab.menuItems.home}</NavLink>
          <NavLink to={'/calls'}>{vocab.menuItems.calls}</NavLink>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
