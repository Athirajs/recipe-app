import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './componets/HomePage';
import NavigationBar from './componets/NavigationBar';
import DetailsPage from './componets/DetailPage';
import FavoritesPage from './componets/FavoritesPage';

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/recipe-item/:id' element={<DetailsPage/>}/>
          <Route path='/favorites' element={<FavoritesPage/>}/>
        </Routes>
      
      </div>
      
    </div>
  );
}

export default App;
