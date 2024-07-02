import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Landing } from './Components/Landing';
import { Card } from './Components/Card';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
