import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Privacy from './pages/legal/Privacy.jsx';
import Terms from './pages/legal/Terms.jsx';
import DepositPolicy from './pages/legal/DepositPolicy.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legal/privacy" element={<Privacy />} />
      <Route path="/legal/terms" element={<Terms />} />
      <Route path="/legal/deposit-policy" element={<DepositPolicy />} />
    </Routes>
  );
}
