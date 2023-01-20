
import './App.css';
import Advartvid from './components/home/Advartvid';
import Customers from './components/home/Customers';
import Landingbanner from './components/home/Landingbanner';
import Partners from './components/home/Partners';
import Playstore from './components/home/Playstore';
import Projectfooter from './components/home/Projectfooter';
import Quetions from './components/home/Quetions';
import Servicespage from './components/home/Servicespage';
import Mainnavbar from './components/navbar/Mainnavbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Mainservices from './components/majorservice/Mainservices';



function App() {
  return (
<Router>
<div className="landing-banner">

<Mainnavbar />
<Switch>
<Route exact path="/"  component={Landingbanner} />
<Route exact path="/services/:name" component={Mainservices} />
</Switch>
<Servicespage />
<Advartvid />
<Partners />
<Customers />
<Quetions />
<Playstore />
<Projectfooter />

    </div>
</Router>
  );
}

export default App;
