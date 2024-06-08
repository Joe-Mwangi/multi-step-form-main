import { cn } from "../lib/utils";
import { useStepsStore } from "../hooks/use-steps-store";
import { Button } from "./ui/button";

const StepsButton = () => {
  const { step, incrementStep, decrementStep } = useStepsStore();

  return (
    <div
      className={cn(
        step === 1 ? "justify-end" : "justify-between",
        "flex bg-white shadow-lg md:shadow-none p-4 md:p-0  "
      )}
    >
      {step !== 1 && (
        <Button
          onClick={() => decrementStep()}
          variant="ghost"
          className="font-bold text-cool-gray"
        >
          Go Back
        </Button>
      )}
      <Button
        // disabled={!completed}
        onClick={() => incrementStep()}
        className={cn(step === 4 && "bg-purplish-blue", "font-bold")}
      >
        {step === 4 ? "Confirm" : "Next Step"}
      </Button>
    </div>
  );
};
export default StepsButton;

export const SwitchBtn = () => {
  const { updateYearly, yearly } = useStepsStore();
  return (
    <div className="flex md:mt-4 items-center gap-4 justify-center p-3 bg-light-gray rounded-lg ">
      <p className="font-bold text-sm md:text-md text-marine-blue">Monthly</p>

      <div
        onClick={() => updateYearly()}
        className={cn(
          yearly ? "justify-end" : "justify-start",
          "flex cursor-pointer  w-12 rounded-2xl p-1 bg-marine-blue"
        )}
      >
        <div className="rounded-full w-4 h-4 bg-white"></div>
      </div>
      <p className="font-bold md:text-md text-sm text-cool-gray">Yearly</p>
    </div>
  );
};
