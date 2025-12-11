type InputUIProps = {
  label?: string;
  id: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputUI(props: InputUIProps) {
  const { label, id, placeholder, className, onChange } = props;
  return (
    <label htmlFor={id}>
      <span className="text-sm font-medium text-gray-700"> {label} </span>
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        className={`mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm bg-white ${className ?? ''}`}
        defaultValue={props.defaultValue}
        onChange={onChange}
      />
    </label>
  );
}

export default InputUI;
