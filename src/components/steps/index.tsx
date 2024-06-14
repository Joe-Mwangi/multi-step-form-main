import { cn } from "../../lib/utils";
import { useStepsStore } from "../../hooks/use-steps-store";

const StepsContainer = () => {
  return (
    <div className="w-full md:w-1/4 h-56 md:h-full bg-[url('/images/mobile.svg')] md:bg-[url('/images/desktop.svg')] bg-cover bg-center bg-no-repeat md:rounded-lg">
      <div className="flex gap-8 h-24 md:h-full md:flex-col w-full md:justify-start justify-center md:pl-8 md:pt-8 md:items-start">
        <Step title="Your info" step={1} />
        <Step title="Select plan" step={2} />
        <Step title="Add-ons" step={3} />
        <Step title="summary" step={4} />
      </div>
    </div>
  );
};
export default StepsContainer;

const Step: React.FC<StepProps> = ({ title, step }) => {
  const { step: currentStep } = useStepsStore();
  const current = currentStep === step;
  return (
    <div className="flex gap-4 items-center">
      <div
        className={cn(
          current ? "bg-light-blue" : "border-2 ",
          "rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
        )}
      >
        <p
          className={cn(
            current ? "text-blue" : "text-white",
            "text-xs font-bold"
          )}
        >
          {step}
        </p>
      </div>
      <div className="hidden md:flex flex-col gap-1">
        <h2 className=" uppercase text-cool-gray text-md">Step {step}</h2>
        <p className="font-bold uppercase text-white text-md">{title}</p>
      </div>
    </div>
  );
};

type StepProps = {
  title: string;
  step: number;
};
