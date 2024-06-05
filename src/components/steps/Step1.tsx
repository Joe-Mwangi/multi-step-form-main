import FormCard from "../Form";

const Step1 = () => {
  return (
    <div className="absolute md:static top-32 inset-x-5  rounded-lg shadow-lg md:shadow-none md:rounded-none p-6 bg-white md:p-0">
      <div className="flex flex-col gap-4 md:gap-2 mb-8">
        <h2 className="font-bold text-2xl text-marine-blue">Personal info</h2>
        <p className="font-bold text-md text-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
        <FormCard />
      </div>
    </div>
  );
};
export default Step1;
