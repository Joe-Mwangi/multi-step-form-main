import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "../lib/utils";
import { Card2Props, CardProps } from "../types";
import { useStepsStore } from "../hooks/use-steps-store";

const PlanCards = () => {
  const { plans } = useStepsStore();
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 md:mt-4 w-full">
      {plans.map((plan) => (
        <Card key={plan.title} data={plan} />
      ))}
    </div>
  );
};

export const AddOnsCard = () => {
  const { addOns } = useStepsStore();

  return (
    <div className="flex flex-col gap-4 md:mt-4 w-full">
      {addOns.map((addOn) => (
        <Card2 key={addOn.title} data={addOn} />
      ))}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ data }) => {
  const { icon, title, monthly, yearly: yrPrice, selected } = data;
  const { updatePlan, yearly } = useStepsStore();

  function handleClick() {
    updatePlan({ title, selected: !selected });
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
      {icon}
      <div className="flex flex-col items-start gap-1 md:gap-2">
        <h2 className="font-bold text-sm md:text-md text-marine-blue">
          {title}
        </h2>
        <p className="font-medium text-xs md:text-sm text-cool-gray">
          {yearly ? `$${yrPrice}/yr` : `$${monthly}/mo`}
        </p>
        {yearly && (
          <p className="font-bold text-xs text-marine-blue">2 months free</p>
        )}
      </div>
    </button>
  );
};

const Card2: React.FC<Card2Props> = ({ data }) => {
  const {
    description,
    title,
    monthly,
    yearly: yrPrice,
    selected: checked,
  } = data;

  const [selected, setSelected] = useState(checked);
  const { updateAddOns, yearly } = useStepsStore();
  function handleClick() {
    setSelected(!selected);
    updateAddOns({ title, selected: !selected });
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
        {yearly ? `+$${yrPrice}/yr` : `+$${monthly}/mo`}
      </p>
    </div>
  );
};

export default PlanCards;
