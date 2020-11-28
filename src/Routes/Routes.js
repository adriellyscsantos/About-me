import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Musicas from "../Pages/Musicas";
import Sobre from '../Pages/Sobre'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/musicas" component={Musicas} /> 
        <Route path="/sobre" component={Sobre} /> 
          
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
