// client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostsPage from './pages/PostsPage';
import CreatePostPage from './pages/CreatePostPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
