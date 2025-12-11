import * as React from 'react';
import InputUI from '../../ui/inputUI/inputUI.tsx';
import TextAreaUI from '../../ui/textAreaUI/textAreaUI.tsx';
import ButtonUI from '../../ui/buttonUI/buttonUI.tsx';
import UploaderUI from '../../ui/uploaderUI/uploaderUI.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../../store/productSlice.ts';
import { useState, useEffect } from 'react';
import type { RootState } from '../../types/types';

function CreateCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isEdit = Boolean(id);

  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === Number(id))
  );

  const [form, setForm] = useState({
    name: '',
    category: '',
    area: '',
    instructions: '',
  });

  const [fileObj, setFileObj] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    category: '',
    area: '',
    instructions: '',
    file: '',
  });

  useEffect(() => {
    if (isEdit && product) {
      setForm({
        name: product.name,
        category: product.category,
        area: product.area,
        instructions: product.instructions ?? '',
      });
      setFileName('Текущее фото');
    }
  }, [product, isEdit]);

  const cancelStep = () => navigate('/products');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    const map = {
      DishName: 'name',
      Category: 'category',
      Area: 'area',
      Instructions: 'instructions',
    };

    const field = map[id as keyof typeof map];
    if (!field) return;

    setForm((prev) => ({ ...prev, [field]: value }));

    setErrors((prev) => ({
      ...prev,
      [field]: value.trim() ? '' : 'Заполните поле',
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileObj(file);
      setFileName(file.name);
      setErrors((prev) => ({ ...prev, file: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: form.name.trim() ? '' : 'Заполните поле',
      category: form.category.trim() ? '' : 'Заполните поле',
      area: form.area.trim() ? '' : 'Заполните поле',
      instructions: form.instructions.trim() ? '' : 'Заполните поле',
      file: isEdit ? '' : fileObj ? '' : 'Прикрепите фото',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((x) => x !== '');
    if (hasErrors) return;

    if (isEdit && product) {
      const updated = {
        id: product.id,
        name: form.name,
        category: form.category,
        area: form.area,
        instructions: form.instructions,
        image: fileObj ? URL.createObjectURL(fileObj) : product.image,
      };

      dispatch(updateProduct(updated));
    } else {
      const newProduct = {
        id: Date.now(),
        name: form.name,
        category: form.category,
        area: form.area,
        instructions: form.instructions,
        image: fileObj ? URL.createObjectURL(fileObj) : '',
      };
      dispatch(addProduct(newProduct));
    }

    navigate('/products');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
    >
      <div>
        <InputUI
          label="Название блюда"
          id="DishName"
          defaultValue={form.name}
          onChange={handleInputChange}
        />
        <p className="text-red-600 text-sm mt-1">{errors.name}</p>
      </div>

      <div>
        <InputUI
          label="Категория"
          id="Category"
          defaultValue={form.category}
          onChange={handleInputChange}
        />
        <p className="text-red-600 text-sm mt-1">{errors.category}</p>
      </div>

      <div>
        <InputUI
          label="Страна"
          id="Area"
          defaultValue={form.area}
          onChange={handleInputChange}
        />
        <p className="text-red-600 text-sm mt-1">{errors.area}</p>
      </div>

      <div>
        <TextAreaUI
          label="Рецепт"
          id="Instructions"
          defaultValue={form.instructions}
          onChange={handleInputChange}
        />
        <p className="text-red-600 text-sm mt-1">{errors.instructions}</p>
      </div>

      <div onChange={handleFileChange}>
        <UploaderUI />
        {fileName && (
          <p className="text-gray-700 text-sm mt-1">Файл: {fileName}</p>
        )}
        <p className="text-red-600 text-sm mt-1">{errors.file}</p>
      </div>

      <ButtonUI
        className="border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:text-teal-600 w-full"
        name={isEdit ? 'Сохранить' : 'Создать'}
        type="submit"
      />

      <ButtonUI onClick={cancelStep} name="Отмена" className="w-full" />
    </form>
  );
}

export default CreateCard;
