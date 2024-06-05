import { Button } from "./ui/button";

const StepsButton = () => {
  return (
    <div className="flex bg-white shadow-lg md:shadow-none p-4 md:p-0  justify-between">
      <Button variant="ghost" className="font-bold text-cool-gray">
        Go Back
      </Button>
      <Button className="font-bold">Next Step</Button>
    </div>
  );
};
export default StepsButton;

export const SwitchBtn = () => {
  return (
    <div className="flex items-center gap-4 justify-center p-3 bg-light-gray rounded-lg ">
      <p className="font-bold text-sm md:text-md text-marine-blue">Monthly</p>

      <div className="flex cursor-pointer justify-start w-12 rounded-2xl p-1 bg-marine-blue">
        <div className="rounded-full w-4 h-4 bg-white"></div>
      </div>
      <p className="font-bold md:text-md text-sm text-cool-gray">Yearly</p>
    </div>
  );
};
