import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import { routes } from './route-config/app-route-config.ts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {routes.map(route => {
            const Comp = route.component
            return( <Route path={route.path} index={route.index} element={<Comp />} />)
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
