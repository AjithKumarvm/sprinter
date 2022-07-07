import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import routes from '../common/config/routes'
import Home from './Home';

const Routing = () => {
    return <Router>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
        </Routes>
    </Router>
}

export default Routing