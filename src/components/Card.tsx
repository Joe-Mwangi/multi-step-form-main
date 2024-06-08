import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "../lib/utils";
import { Card2Props, CardProps } from "../types";
import { useStepsStore } from "./hooks/use-steps-store";

const PlanCards = () => {
  const { yearly } = useStepsStore();
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 md:mt-4 w-full">
      <Card title="Arcade" price={yearly ? "90" : "9"} icon="icon-arcade.svg" />
      <Card
        title="Advanced"
        price={yearly ? "120" : "12"}
        icon="icon-advanced.svg"
      />
      <Card title="Pro" price={yearly ? "150" : "15"} icon="icon-pro.svg" />
    </div>
  );
};

export const AddOnsCard = () => {
  const { yearly } = useStepsStore();

  return (
    <div className="flex flex-col gap-4 md:mt-4 w-full">
      <Card2
        title="Online service"
        description="Access to multiplayer games"
        amount={yearly ? "10" : "1"}
      />

      <Card2
        title="Larger storage"
        description="Extra 1TB of cloud save"
        amount={yearly ? "20" : "2"}
      />
      <Card2
        title="Customizable profile"
        description="Custom theme on your profile"
        amount={yearly ? "20" : "2"}
      />
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, price, icon }) => {
  const [selected, setSelected] = useState(false);
  const { updatePlan, yearly } = useStepsStore();

  function handleClick() {
    setSelected(!selected);
    updatePlan({ title, price });
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        selected && "bg-magnolia border-purplish-blue",

        "rounded-lg hover:border-purplish-blue border  text-card-foreground shadow-sm flex p-3 md:p-4 md:flex-col gap-4 md:gap-16 items-center md:items-start w-full"
      )}
    >
      <div
        className={`w-10 md:w-12 md:h-12 h-10 bg-[url('/images/${icon}')] bg-center bg-cover bg-no-repeat`}
      ></div>
      <div className="flex flex-col items-start gap-1 md:gap-2">
        <h2 className="font-bold text-sm md:text-md text-marine-blue">
          {title}
        </h2>
        <p className="font-medium text-xs md:text-sm text-cool-gray">
          ${price}/{yearly ? "yr" : "mo"}
        </p>
        {yearly && (
          <p className="font-bold text-xs text-marine-blue">2 months free</p>
        )}
      </div>
    </button>
  );
};

const Card2: React.FC<Card2Props> = ({ title, description, amount }) => {
  const [selected, setSelected] = useState(false);
  const { updateAddOns, yearly } = useStepsStore();
  function handleClick() {
    setSelected(!selected);
    updateAddOns({ title, price: amount });
  }
  return (
    <div
      className={cn(
        selected && "bg-magnolia border-purplish-blue",
        "rounded-lg hover:border-purplish-blue border  text-card-foreground shadow-sm flex p-4 justify-between md:gap-16 items-center w-full"
      )}
      onClick={handleClick}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <Checkbox
          checked={selected}
          onCheckedChange={(checked) => {
            return checked ? setSelected(true) : setSelected(false);
          }}
          value={title}
        />
        <div className="flex flex-col items-start ">
          <h2 className="font-bold text-sm md:text-md text-marine-blue">
            {title}
          </h2>
          <p className="font-medium text-xs md:text-sm text-cool-gray">
            {description}
          </p>
        </div>
      </div>
      <p className="font-bold text-xs md:text-sm text-purplish-blue">
        +${amount}/{yearly ? "yr" : "mo"}
      </p>
    </div>
  );
};

export default PlanCards;
