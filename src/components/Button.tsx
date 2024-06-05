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
