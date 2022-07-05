import { Routes, Route } from 'react-router-dom';
import { RoutePath } from './common/constants/RoutePath';
import { Landing, Contacts, NotFoundPage } from './pages';
import { Layout } from './common/components';

import '../src/common/styles/global.scss';

function App() {
  return (
    <Routes>
      <Route path={RoutePath.Landing} element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path={RoutePath.Contacts} element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

