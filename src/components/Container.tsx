import StepsButton from "./Button";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

import FinalStep from "./steps/Final";
import { useStepsStore } from "./hooks/use-steps-store";

const MainContainer = () => {
  const { step } = useStepsStore();

  switch (step) {
    case 1:
      return (
        <div className="md:px-20 flex flex-col justify-end md:py-8 bg-light-blue md:bg-white md:w-3/4 h-full md:flex md:flex-col md:justify-between">
          <Step1 />
          <StepsButton />
        </div>
      );

    case 2:
      return (
        <div className="md:px-20 flex flex-col justify-end md:py-8 bg-light-blue md:bg-white md:w-3/4 h-full md:flex md:flex-col md:justify-between">
          <Step2 />
          <StepsButton />
        </div>
      );

    case 3:
      return (
        <div className="md:px-20 flex flex-col justify-end md:py-8 bg-light-blue md:bg-white md:w-3/4 h-full md:flex md:flex-col md:justify-between">
          <Step3 />
          <StepsButton />
        </div>
      );
    case 4:
      return (
        <div className="md:px-20 flex flex-col justify-end md:py-8 bg-light-blue md:bg-white md:w-3/4 h-full md:flex md:flex-col md:justify-between">
          <Step4 />
          <StepsButton />
        </div>
      );
    default:
      break;
  }

  return (
    <div className="md:px-20 flex flex-col justify-end md:py-8 bg-light-blue md:bg-white md:w-3/4 h-full md:flex md:flex-col md:justify-between">
      <FinalStep />
    </div>
  );
};
export default MainContainer;
