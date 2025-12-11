import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/productSlice.ts';
import LoaderUI from '../../ui/loaderUI/loaderUI.tsx';
import { ProductCard } from '../card/card.tsx';
import type { AppDispatch, RootState } from '../../store/index.ts';

function CardList() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => {
    return state.products.products;
  });

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const loading = useSelector((state: RootState) => {
    return state.products.loading;
  });
  const error = useSelector((state: RootState) => {
    return state.products.error;
  });

  const favorites = useSelector((state: RootState) => {
    return state.products.favorites;
  });
  const showFavorites = useSelector((state: RootState) => {
    return state.products.showFavorites;
  });

  const filteredProducts = showFavorites
    ? products.filter((p) => favorites.includes(p.id))
    : products;

  if (loading) {
    return <LoaderUI />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (products.length === 0) {
    return <div>Нет данных</div>;
  }

  return (
    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 max-w-screen-lg mx-auto overflow-auto">
      {filteredProducts.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            area={product.area}
          />
        );
      })}
    </div>
  );
}

export default CardList;
