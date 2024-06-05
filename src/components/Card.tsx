const PlanCards = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 md:mt-4 w-full">
      <Card title="Arcade" price="9" icon="icon-arcade.svg" />
      <Card title="Advanced" price="12" icon="icon-advanced.svg" />
      <Card title="Pro" price="15" icon="icon-pro.svg" />
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, price, icon, yearly }) => {
  return (
    <button className="rounded-lg hover:border-purplish-blue focus:bg-light-gray focus:border-purplish-blue border bg-card text-card-foreground shadow-sm flex p-4 md:flex-col gap-4 md:gap-12 items-center md:items-start w-full">
      <div
        className={`w-10 md:w-12 md:h-12 h-10 bg-[url('/images/${icon}')] bg-center bg-cover bg-no-repeat`}
      ></div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="font-bold text-md text-marine-blue">{title}</h2>
        <p className="font-medium text-sm text-cool-gray">${price}/mo </p>
        {yearly && (
          <p className="font-bold text-xs text-marine-blue">2 months free</p>
        )}
      </div>
    </button>
  );
};

export default PlanCards;

type CardProps = {
  title: string;
  price: string;
  icon: string;
  yearly?: boolean;
};
