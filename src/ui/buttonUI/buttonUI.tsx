type ButtonUIProps = {
  name: string;
  className?: string;
};

function ButtonUI(props: ButtonUIProps) {
  const { name, className } = props;
  return (
    <button
      className={`block rounded-lg border  transition-colors ${className ?? ''}`}
    >
      {name}
    </button>
  );
}

export default ButtonUI;
