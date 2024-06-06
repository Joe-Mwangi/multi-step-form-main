const FinalStep = () => {
  return (
    <div className="absolute md:static top-32 inset-x-5  rounded-lg shadow-lg md:shadow-none md:rounded-none p-6 bg-white md:p-0">
      <div className="flex flex-col justify-center items-center gap-4 h-80 px-4 md:px-0 md:h-full">
        <div className="w-12 h-12  bg-[url('/images/icon-thank-you.svg')] bg-center bg-cover bg-no-repeat"></div>
        <h2 className="font-bold text-2xl text-marine-blue">Thank you!</h2>
        <p className="font-medium text-md text-center text-cool-gray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};
export default FinalStep;
