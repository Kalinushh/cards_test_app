import IconButton from '../../ui/iconButton/iconButton.tsx';

type CardDetailProps = {
  id: number;
  name: string;
  image: string;
  category: string;
  area: string;
  instructions?: string;
};

function CardDetail(props: CardDetailProps) {
  const { id, name, image, category, area, instructions } = props;
  return (
    <article
      data-id={id}
      className=" shadow-xl/20 mx-auto max-w-md space-y-4 rounded-xl p-2"
    >
      <span className="flex items-center">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300"></span>
        <h1 className="shrink-0 px-4 text-gray-900 line-clamp-1">{name}</h1>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300"></span>
      </span>
      <img
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
        src={image}
        alt={name}
      />
      <p className="badge badge-outline line-clamp-1">{category}</p>
      <p className="mt-4 text-base font-bold text-gray-900 line-clamp-1">
        {area}
      </p>
      <p className="badge badge-outline line-clamp-4">{instructions}</p>
      <IconButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="3"
          viewBox="0 -3.71 75.17 75.17"
          className="w-4 h-4"
        >
          <path d="M37.585 66.244s22.263-15.459 31.959-30.318c9.6-14.708.354-31.054-10.533-33.8-14.457-3.65-21.426 10.478-21.426 10.478S30.617-1.524 16.16 2.126C5.272 4.874-3.972 21.22 5.626 35.926c9.696 14.859 31.959 30.318 31.959 30.318Z" />
        </svg>
      </IconButton>
      <IconButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" />
        </svg>
      </IconButton>
      <IconButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10 3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7 17 4.414 15.414 6 18 8.586z" />
        </svg>
      </IconButton>
    </article>
  );
}

export default CardDetail;
