import Card from "./Card";

const data = [
  {
    id: 0,
    title: "New Super Mario Bros",
    price: "$1200.00",
    cover: "src/assets/mario.png",
  },
  {
    id: 1,
    title: "GTA Vice City",
    price: "$1200.00",
    cover: "src/assets/gta.webp",
  },
  {
    id: 2,
    title: "Uncharted 2",
    price: "$1200.00",
    cover: "src/assets/uncharted.jpg",
  },
  {
    id: 3,
    title: "Red Dead Redemption",
    price: "$1200.00",
    cover: "src/assets/red_dead_2.jpg",
  },
  {
    id: 4,
    title: "Donkey Kong",
    price: "$1200.00",
    cover: "src/assets/donkey_kong.jpg",
  },
  {
    id: 5,
    title: "Halo",
    price: "$1200.00",
    cover: "src/assets/halo.jpg",
  },
];

export default function CardList() {
  return (
    <div className="flex gap-y-4 w-full justify-evenly flex-wrapm p-10">
      {data.map((game) => (
        <Card cover={game.cover} title={game.title} price={game.price} />
      ))}
    </div>
  );
}
