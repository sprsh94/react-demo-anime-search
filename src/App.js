import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, NavItem } from "./components/navigation/Navigation";
import { Search, About, Home } from "./components/pages";
import { SearchProvider } from "./components/contextProviders/SearchContext";
import SideBar from "./components/navigation/SideBar";

function App() {
  return (
    <Router>
      <SearchProvider>
        <div className="App">
          <NavBar>
            <NavItem item="About" path="about" />
          </NavBar>
          <SideBar />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </SearchProvider>
    </Router>
  );
}

export default App;
