import border from "../assets/card.png";
import stars from "../assets/stars.png";

export default function Card({
  cover,
  title,
  price,
}: {
  cover: string;
  title: string;
  price: string;
}) {
  return (
    <div className="relative w-58 h-38">
      <img src={border} className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-evenly">
        <img src={cover} alt="" className="w-4/6 h-36 object-cover" />
        <img src={stars} alt="" className="w-32 h-10 object-contain" />
        <h3 className="text-sm text-center">{title}</h3>
        <span className="text-xs font-bold">{price}</span>
      </div>
    </div>
  );
}
