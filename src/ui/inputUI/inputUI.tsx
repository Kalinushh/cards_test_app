function InputUI(props) {
  const { label, id } = props;
  return (
    <label htmlFor={id}>
      <span className="text-sm font-medium text-gray-700"> {label} </span>
      <input
        type="text"
        id={id}
        className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm bg-white"
      />
    </label>
  );
}

export default InputUI;
