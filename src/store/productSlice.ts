import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { ProductsState, TProduct } from '../types/types';
import apiMeal from '../api/mealApi.ts';

const initialState: ProductsState = {
  products: [],
  favorites: [],
  loading: false,
  error: null,
  showFavorites: false,
};

export const fetchProducts = createAsyncThunk<
  TProduct[],
  void,
  { rejectValue: string }
>('products/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    const products = (await apiMeal()) as TProduct[];
    return products;
  } catch (error) {
    return rejectWithValue('Ошибка загрузки');
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((e) => {
          return e !== id;
        });
      } else {
        state.favorites.push(id);
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.products = state.products.filter((e) => {
        return e.id !== id;
      });
    },
    toggleFavorites: (state) => {
      state.showFavorites = !state.showFavorites;
    },
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<TProduct>) => {
      const updated = action.payload;
      state.products = state.products.map((p) =>
        p.id === updated.id ? updated : p
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<TProduct[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Ошибка загрузки';
      });
  },
});

export default productSlice.reducer;
export const {
  toggleFavorite,
  deleteProduct,
  toggleFavorites,
  addProduct,
  updateProduct,
} = productSlice.actions;
