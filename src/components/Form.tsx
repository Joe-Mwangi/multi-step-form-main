import { useStepsStore } from "./hooks/use-steps-store";
import { Input } from "./ui/input";

// const message = "This Field is Required";

const FormCard = () => {
  const { updateFormValues, formValues } = useStepsStore();

  const { name, email, phoneNo } = formValues;

  return (
    <form className="space-y-8 w-full">
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex justify-between">
            <label className="font-medium mb-2 text-marine-blue">Name</label>
          </div>

          <Input
            className="font-bold text-light-gray"
            placeholder="eg. Stephen King"
            type="text"
            name="name"
            value={name}
            onChange={updateFormValues("name")}
          />
        </div>
        <div>
          {" "}
          <div className="flex justify-between">
            <label className="font-medium mb-2 text-marine-blue">
              Email Address
            </label>
          </div>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={updateFormValues("email")}
            className="font-bold text-light-gray"
            placeholder="eg. stephenking@lorem.com"
          />
        </div>

        <div>
          <div className="flex justify-between">
            <label className="font-medium mb-2 text-marine-blue">
              Phone Number
            </label>
          </div>

          <Input
            type="tel"
            value={phoneNo}
            onChange={updateFormValues("phoneNo")}
            className="font-bold text-light-gray"
            placeholder="eg. +1 234 567 890"
            name="phoneNo"
          />
        </div>
      </div>
    </form>
  );
};
export default FormCard;
