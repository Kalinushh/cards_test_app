function UploaderUI() {
  return (
    <>
      <label
        htmlFor="file-upload"
        className="block cursor-pointer rounded border border-gray-300 p-2 text-center text-sm text-gray-600 hover:bg-gray-50"
      >
        Загрузить фото
      </label>

      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="sr-only"
      />
    </>
  );
}

export default UploaderUI;
