import Root from '../pages/Root';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Reviews from '../pages/Reviews'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path='/reviews' element={<Reviews/>}/>
    </Route>,
  ),
);