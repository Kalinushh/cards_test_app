export type TApiMeal = {
  id: number;
  name: string;
  image: string;
  category: string;
  area: string | null;
  instructions: string | null;
};

export type TProduct = {
  id: number;
  name: string;
  category: string;
  area: string;
  instructions?: string;
  image: string;
};

export type ProductsState = {
  products: TProduct[];
  favorites: number[];
  loading: boolean;
  error: string | null;
  showFavorites: boolean;
};

export type CreateCardErrors = {
  name: string;
  category: string;
  area: string;
  instructions: string;
  file: string;
};

export type ProductCardProps = {
  id: number;
  name: string;
  image: string;
  category: string;
  area: string;
};

export type CardDetailProps = {
  id: number;
  name: string;
  image: string;
  category: string;
  area: string;
  instructions?: string;
};

export type RootState = {
  products: ProductsState;
};
