import StepsButton from "./Button";
import FormCard from "./Form";

const MainContainer = () => {
  return (
    <div className="md:px-20 flex flex-col justify-end md:py-8 bg-light-blue md:bg-white md:w-3/4 h-full md:flex md:flex-col md:justify-between">
      <FormCard />
      <StepsButton />
    </div>
  );
};
export default MainContainer;
