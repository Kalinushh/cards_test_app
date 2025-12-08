type TextAreaUIProps = {
  label: string;
  id: string;
};

function TextAreaUI(props: TextAreaUIProps) {
  const { label, id } = props;
  return (
    <label htmlFor={id}>
      <span className="text-sm font-medium text-gray-700"> {label} </span>
      <textarea
        id={id}
        className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm bg-white"
      />
    </label>
  );
}

export default TextAreaUI;
