import InputUI from '../../ui/inputUI/inputUI.tsx';
import TextAreaUI from '../../ui/textAreaUI/textAreaUI.tsx';
import ButtonUI from '../../ui/buttonUI/buttonUI.tsx';
import UploaderUI from '../../ui/uploaderUI/uploaderUI.tsx';

function CreateCard() {
  return (
    <form
      action="#"
      className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
    >
      <InputUI label="Название блюда" id={'DishName'} />
      <InputUI label="Категоря" id={'Category'} />
      <InputUI label="Страна" id={'Area'} />
      <TextAreaUI label="Рецепт" id={'Instructions'} />
      <UploaderUI />
      <ButtonUI
        className="border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:text-indigo-600  w-full"
        name="Создать"
      />
      <ButtonUI name="Назад" className={'w-full'} />
    </form>
  );
}

export default CreateCard;
