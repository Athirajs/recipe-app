import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './componets/HomePage';
import NavigationBar from './componets/NavigationBar';
import DetailsPage from './componets/DetailPage';
import FavoritesPage from './componets/FavoritesPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <NavigationBar />
      <main className="p-6">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipe-item/:id' element={<DetailsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
