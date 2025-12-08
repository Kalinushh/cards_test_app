interface ICardList {
  children: React.ReactNode;
}

function CardList(props: ICardList) {
  const { children } = props;
  return (
    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 max-w-screen-lg mx-auto overflow-auto">
      {children}
    </div>
  );
}

export default CardList;
