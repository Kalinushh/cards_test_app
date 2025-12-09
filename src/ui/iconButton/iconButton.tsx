type IconButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function IconButton(props: IconButtonProps) {
  const { children, onClick } = props;
  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    onClick?.(evt);
  };
  return (
    <button
      onClick={handleClick}
      className={
        'ml-px border border-gray-200 px-2 py-1 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50'
      }
    >
      {children}
    </button>
  );
}

export default IconButton;
