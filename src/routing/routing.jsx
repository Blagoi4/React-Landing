import Root from '../pages/Root';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Reviews from '../pages/Reviews'
import Todos from '../pages/Todos';
import Notes from '../pages/Notes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/todos' element={<Todos/>}/>
      <Route path='/notes' element={<Notes/>}/>
    </Route>,
  ),
);