import { AddOnsCard } from "../Card";

const Step3 = () => {
  return (
    <div className="absolute md:static top-24 inset-x-5  rounded-lg shadow-lg md:shadow-none md:rounded-none p-6 bg-white md:p-0">
      <div className="flex flex-col gap-4 ">
        <h2 className="font-bold text-xl md:text-2xl text-marine-blue">
          Pick add-ons
        </h2>
        <p className="font-bold text-sm md:text-md text-cool-gray">
          Add-ons helps enhance your gaming experience.
        </p>
        <AddOnsCard />
      </div>
    </div>
  );
};
export default Step3;
