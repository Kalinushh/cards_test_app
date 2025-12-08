interface ICardDetailPage {
  children: React.ReactNode;
}

function CardDetailPage(props: ICardDetailPage) {
  const { children } = props;
  return (
    <div className=" gap-2 p-4 max-w-screen-lg mx-auto overflow-auto">
      {children}
    </div>
  );
}

export default CardDetailPage;
