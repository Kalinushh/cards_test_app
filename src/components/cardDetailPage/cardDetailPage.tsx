import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoaderUI from '../../ui/loaderUI/loaderUI.tsx';
import { CardDetail } from '../cardDetail/cardDetail.tsx';
import { useEffect } from 'react';
import type { RootState } from '../../types/types';

function CardDetailPage() {
  const { id } = useParams();
  const products = useSelector((state: RootState) => {
    return state.products.products;
  });
  const product = products.find((product) => product.id === Number(id));
  const loading = useSelector((state: RootState) => {
    return state.products.loading;
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !product) {
      navigate('/products');
    }
  }, [navigate, loading, product]);
  if (loading) {
    return <LoaderUI />;
  }
  if (!product) {
    return null;
  }

  return (
    <div className=" gap-2 p-4 max-w-screen-lg mx-auto overflow-auto">
      {
        <CardDetail
          id={product.id}
          name={product.name}
          image={product.image}
          category={product.category}
          area={product.area}
          instructions={product.instructions}
        />
      }
    </div>
  );
}

export default CardDetailPage;
