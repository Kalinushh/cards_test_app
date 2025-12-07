import InputUI from '../../ui/inputUI/inputUI.tsx';

function CreateCard() {
  return (
    <form
      action="#"
      className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
    >
      <InputUI label="Название блюда" />
      <InputUI label="Категоря" />
      <InputUI label="Страна" />
      <InputUI label="Название блюда" />
      <button
        className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}

export default CreateCard;
