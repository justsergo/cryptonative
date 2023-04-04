import React from 'react';
import {useSelector} from 'react-redux';

import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

import {getToken} from '../store/selectors/user';

const Navigation = () => {
  // const token = useSelector(getToken);

  // console.log('toketn', token);

  // if (token) {
  //   return <AppNavigation />;
  // }

  // return <AuthNavigation />;

  return <AppNavigation />;
};

<AppNavigation />;
export default Navigation;
