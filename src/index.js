import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  RequireAuth,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Pantry from './routes/pantry'
import Profile from './routes/profile';
import Recipes from './routes/recipes';
import PantryList from './routes/pantryList';
import Shopping from './routes/shopping';
import Login from './routes/login';
import User from './routes/user';

import GlobalStyles from './GlobalStyles';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        {/* ToDo:  Add login landing page under '/' path and move parent element to '/user' path */}
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/user' element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="pantry" element={<Pantry />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="pantryList" element={<PantryList />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
