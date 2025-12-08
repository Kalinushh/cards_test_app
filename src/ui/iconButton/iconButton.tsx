type IconButtonProps = {
  children?: React.ReactNode;
};

function IconButton(props: IconButtonProps) {
  const { children } = props;
  return (
    <button
      className={
        'ml-px border border-gray-200 px-2 py-1 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50'
      }
    >
      {children}
    </button>
  );
}

export default IconButton;
