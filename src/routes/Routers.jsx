import { Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/signup';
import Pricing from '../pages/pricing';
const Routers = () => {

  return (
      <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Landing />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/pricing' element={<Pricing />}/>
        </Route>
      </Routes>
  );
};
export default Routers;
