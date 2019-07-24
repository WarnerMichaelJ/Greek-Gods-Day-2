import React from "react";
import { Route, Switch } from "react-router";
import GodsList from './gods/GodsList';
import Test from './tests/test';
import AbodesList from './abodes/AbodesList';
import Abode from './abodes/Abode';
import EmblemsList from './emblems/EmblemList';
import God from './gods/God';
import GodsListParents from './gods/GodsListParents';
import GodsListChildren from './gods/GodsListChildren';
import GodsListSiblings from './gods/GodsListSiblings';
import GodCreate from './create/GodCreate';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/gods/create" component={GodCreate} />
        <Route path="/gods/:godId/parents" component={GodsListParents} />
        <Route path="/gods/:godId/children" component={GodsListChildren} />
        <Route path="/gods/:godId/siblings" component={GodsListSiblings} />
        <Route path="/gods/:godId" component={God} />
        <Route path="/abodes/:abodeId" component={Abode} />
        <Route path="/abodes" component={AbodesList} />
        <Route path="/emblems" component={EmblemsList} />
        <Route path="/test" component={Test} />
        <Route path="/" component={GodsList} />
      </Switch>
    </div>
  );
};

export default App;