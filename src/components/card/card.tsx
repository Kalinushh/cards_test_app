import type { TApiMeal } from '../../types/types.ts';
import IconButton from '../../ui/iconButton/iconButton.tsx';

function ProductCard(props: TApiMeal) {
  const { id, name, image, category, area, instructions } = props;
  return (
    <article
      data-id={id}
      className="block shadow-xl/20 w-full max-w-48 rounded-xl p-2"
    >
      <span className="flex items-center">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300"></span>
        <h1 className="shrink-0 px-4 text-gray-900">{name}</h1>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300"></span>
      </span>
      <img
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
        src={image}
        alt={name}
      />
      <h2 className="badge badge-outline ">{category}</h2>
      <h2 className="mt-4 text-base font-bold text-gray-900 ">{area}</h2>
      <IconButton />
      <IconButton />
    </article>
  );
}

export default ProductCard;
