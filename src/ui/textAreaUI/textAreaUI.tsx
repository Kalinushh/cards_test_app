type TextAreaUIProps = {
  label: string;
  id: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function TextAreaUI(props: TextAreaUIProps) {
  const { label, id, onChange } = props;
  return (
    <label htmlFor={id}>
      <span className="text-sm font-medium text-gray-700"> {label} </span>
      <textarea
        id={id}
        name={id}
        className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm bg-white"
        defaultValue={props.defaultValue}
        onChange={onChange}
      />
    </label>
  );
}

export default TextAreaUI;
