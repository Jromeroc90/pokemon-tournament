import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages';
import MainLayout from '../layouts/Main';

const AppRouter = () => (
  <MainLayout>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </MainLayout>
);

export default AppRouter;