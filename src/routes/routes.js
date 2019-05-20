import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import App from '../App';
import TabVIew from '../component/Tabs';
import MediaCard from '../component/common/MediaCard';

const appRoutes = () => (
  <React.Fragment>
    <Route path="/" exact component={TabVIew} />
    <Route path="/:id" exact component={TabVIew} />
    <Route path="/first/person/:pid" exact component={MediaCard} />
  </React.Fragment>
);

function appComponent(props) {
  return (<App {...props} approutes={appRoutes()} />);
}
const topRoutes = () => (
  <Switch>
    {/* In secure route this will be login page */}
    <Route path="/" component={appComponent} />
    {/* Can use secure path here  */}
  </Switch>
);

export default topRoutes;
