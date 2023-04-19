import './App.css';
import Counter from './components/Counter/Counter';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import AllPosts from './pages/AllPosts/AllPosts';
import SinglePost from './pages/SinglePost/SinglePost';

const App = () => {
  const a = 10;
  const b = 20;

  return (
    <div>
      <Routes>  
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/posts' element={<AllPosts />} />
        <Route path='/posts/:id' element={<SinglePost />} />
      </Routes>
    </div>
  );
};

export default App;
