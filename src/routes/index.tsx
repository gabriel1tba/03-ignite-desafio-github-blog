import { Routes as Switch, Route } from 'react-router-dom';

import DefaultLayout from '../templates/LayoutDefault';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='' element={<Home />} />
      </Route>
    </Switch>
  );
};

export default Routes;
