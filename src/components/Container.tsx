// import StepsButton from "./Button";
// import Step1 from "./steps/Step1";
// import Step2 from "./steps/Step2";
// import Step3 from "./steps/Step3";
// import Step4 from "./steps/Step4";

import FinalStep from "./steps/Final";

const MainContainer = () => {
  return (
    <div className="md:px-20 flex flex-col justify-end md:py-8 bg-light-blue md:bg-white md:w-3/4 h-full md:flex md:flex-col md:justify-between">
      {/* <Step1 /> */}
      {/* <Step2 /> */}
      {/* <Step3 /> */}
      {/* <Step4 />
      <StepsButton /> */}
      <FinalStep />
    </div>
  );
};
export default MainContainer;
