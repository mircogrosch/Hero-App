import { Route } from "react-router";
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <PrivateRoute path="/home" Component={Home} />
    </div>
  );
}

export default App;
