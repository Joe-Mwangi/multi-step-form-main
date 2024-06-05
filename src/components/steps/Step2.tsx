import { SwitchBtn } from "../Button";
import PlanCards from "../Card";

const Step2 = () => {
  return (
    <div className="absolute md:static top-24 inset-x-5  rounded-lg shadow-lg md:shadow-none md:rounded-none p-6 bg-white md:p-0">
      <div className="flex flex-col gap-4 ">
        <h2 className="font-bold text-2xl text-marine-blue">
          Select your plan
        </h2>
        <p className="font-bold text-md text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
        <PlanCards />
        <SwitchBtn />
      </div>
    </div>
  );
};
export default Step2;
