import { Routes as Switch, Route } from 'react-router-dom';

import DefaultLayout from '../templates/LayoutDefault';
import Home from '../pages/Home';
import Post from '../pages/Post';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="" element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Route>
    </Switch>
  );
};

export default Routes;
