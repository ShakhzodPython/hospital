import { Routes, Route } from 'react-router';

import { ScrollToTop } from './utils/scrollTop';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { PaidPage } from './pages/components/PaidPage/PaidPage';
import { ContactPage } from './pages/components/ContactPage/ContactPage';
import { AppointmentPage } from './pages/components/AppointmentPage/AppointmentPage';
import { Detail } from './pages/components/PaidPage/Detail/Detail';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/appointment' element={<AppointmentPage />} />
        <Route path='/paid-services' element={<PaidPage />} />
        <Route path='/paid-services/:slug' element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
