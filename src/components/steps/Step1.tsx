import { useStepsStore } from "../../hooks/use-steps-store";
import { FormValues } from "../../types";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

const Step1 = () => {
  const { updateFormValues, incrementStep, formValues } = useStepsStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    updateFormValues(data);
    incrementStep();
  };
  const { name, email, phoneNo } = formValues;
  const message = "This field is required";
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:px-20 flex flex-col justify-end md:py-8 bg-light-blue md:bg-white md:w-3/4 h-full md:flex md:flex-col md:justify-between"
    >
      <div className="absolute md:static top-24 inset-x-5  rounded-lg shadow-lg md:shadow-none md:rounded-none p-6 bg-white md:p-0">
        <div className="flex flex-col gap-4 md:gap-2 mb-8">
          <h2 className="font-bold text-2xl text-marine-blue">Personal info</h2>
          <p className="font-medium text-md text-cool-gray">
            Please provide your name, email address, and phone number.
          </p>
          <div className="space-y-8 w-full">
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between">
                  <label className="font-medium mb-2 text-sm text-marine-blue">
                    Name
                  </label>
                  {errors.name && (
                    <p className="font-medium text-sm text-destructive">
                      {message}
                    </p>
                  )}
                </div>

                <input
                  {...register("name", { required: true })}
                  className="font-bold text-marine-blue flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="eg. Stephen King"
                  type="text"
                  name="name"
                  defaultValue={name}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label className="font-medium mb-2 text-sm text-marine-blue">
                    Email Address
                  </label>
                  {errors.email && (
                    <p className="font-medium text-sm text-destructive">
                      {message}
                    </p>
                  )}
                </div>
                <input
                  {...register("email", { required: true })}
                  defaultValue={email}
                  type="email"
                  name="email"
                  className="font-bold text-marine-blue flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="eg. stephenking@lorem.com"
                />
              </div>

              <div>
                <div className="flex justify-between">
                  <label className="font-medium mb-2 text-sm text-marine-blue">
                    Phone Number
                  </label>
                  {errors.phoneNo && (
                    <p className="font-medium text-sm text-destructive">
                      {message}
                    </p>
                  )}
                </div>

                <input
                  {...register("phoneNo", { required: true })}
                  defaultValue={phoneNo}
                  type="tel"
                  className="font-bold text-marine-blue flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="eg. +1 234 567 890"
                  name="phoneNo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end bg-white shadow-lg md:shadow-none p-4 md:p-0 ">
        <Button type="submit" className="font-bold">
          Next Step
        </Button>
      </div>
    </form>
  );
};
export default Step1;
