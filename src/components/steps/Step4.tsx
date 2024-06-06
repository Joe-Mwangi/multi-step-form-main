const Step4 = () => {
  return (
    <div className="absolute md:static top-32 inset-x-5  rounded-lg shadow-lg md:shadow-none md:rounded-none p-6 bg-white md:p-0">
      <div className="flex flex-col gap-4 md:gap-2 mb-8">
        <h2 className="font-bold text-2xl text-marine-blue">Finishig up</h2>
        <p className="font-medium text-md text-cool-gray md:mb-8">
          Double-check everything looks OK before confirming.
        </p>
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-col gap-4 w-full justify-start">
      <div className="flex flex-col p-4 gap-4 bg-light-gray rounded-lg">
        <div className="flex justify-between items-center pb-4  border-b border-cool-gray">
          <div className="flex flex-col justify-start">
            <h2 className="font-bold text-md text-marine-blue">
              Arcade (Monthly)
            </h2>
            <p className="font-medium text-sm text-cool-gray underline">
              Change
            </p>
          </div>
          <h3 className="font-bold text-md text-marine-blue">$9/mo</h3>
        </div>
        <div className="flex justify-between">
          <h4 className="font-medium text-md text-cool-gray">Online service</h4>
          <p className="font-bold text-sm text-marine-blue ">+$1/mo</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-medium text-md text-cool-gray">Online service</h4>
          <p className="font-bold text-sm text-marine-blue ">+$1/mo</p>
        </div>
      </div>
      <div className="flex justify-between px-4">
        <h4 className="font-medium text-md text-cool-gray">
          Total (per month)
        </h4>
        <p className="font-bold text-md text-purplish-blue ">+$12/mo</p>
      </div>
    </div>
  );
};
export default Step4;
