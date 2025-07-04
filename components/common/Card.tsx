import { CardProps } from '../../interfaces';

const Card = ({ title, description, imageUrl, price }: CardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="font-semibold mt-2">${price}/night</p>
      </div>
    </div>
  );
};

export default Card;