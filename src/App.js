import './App.css';
import Header from './COMPONENTS/Header/Header';
import Tab from './COMPONENTS/Tabs/Tab';
import { Switch } from "react-router-dom";
import Routes from './Routes/Routes';
import Nav from './COMPONENTS/Nav/Nav';

import { UserNameProvider } from "./State Management/store";

function App() {
  return (
    <div className="App">
      <UserNameProvider>
      <Nav />
      <Switch>
      <Routes />
      </Switch>
      </UserNameProvider>
    </div>
  );
}

export default App;
