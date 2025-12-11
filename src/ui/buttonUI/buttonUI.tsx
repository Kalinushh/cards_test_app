type ButtonUIProps = {
  name: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
};

function ButtonUI(props: ButtonUIProps) {
  const { name, className, onClick, type } = props;
  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    onClick?.(evt);
  };
  return (
    <button
      onClick={handleClick}
      className={`block rounded-lg border  transition-colors ${className ?? ''}`}
      type={type}
    >
      {name}
    </button>
  );
}

export default ButtonUI;
