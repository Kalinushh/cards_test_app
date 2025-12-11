import CardDetailPage from './components/cardDetailPage/cardDetailPage.tsx';
import Header from './components/header/header.tsx';
import { Routes, Route } from 'react-router-dom';
import CardList from './components/cardList/cardList.tsx';
import CreateCard from './components/createCard/createCard.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/products'} element={<CardList />} />
        <Route path="/products/:id" element={<CardDetailPage />} />
        <Route path="/create-product" element={<CreateCard />} />
        <Route path="/products/:id/edit" element={<CreateCard />} />
      </Routes>
    </>
  );
}

export default App;
