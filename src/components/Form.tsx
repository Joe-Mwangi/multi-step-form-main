import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStepsStore } from "./hooks/use-steps-store";

const message = "This Field is Required";

const formSchema = z.object({
  name: z.string().min(1, message),
  email: z.string().min(1, message),
  phoneNo: z.string().min(1, message),
});

export type FormValues = z.infer<typeof formSchema>;

const FormCard = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phoneNo: "",
      name: "",
    },
  });

  const { updateFormValues, updateComplete } = useStepsStore();

  const onSubmit = async (data: FormValues) => {
    updateFormValues(data);
    updateComplete({ step: 1, complete: true });
    console.log(data);
  };
  // console.log(form.getValues());
  // const handleOnChange = (data: {name: string, value: string}) => {

  // }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="font-bold text-marine-blue">
                    Name
                  </FormLabel>
                  <FormMessage />
                </div>

                <FormControl>
                  <Input
                    className="font-bold text-light-gray"
                    placeholder="eg. Stephen King"
                    {...form.register("name", {
                      onChange: (e) => {
                        console.log("name: ", e.target.value);
                      },
                    })}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="font-bold text-marine-blue">
                    Email Address
                  </FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    className="font-bold text-light-gray"
                    placeholder="eg. stephenking@lorem.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNo"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="font-bold text-marine-blue">
                    Phone Number
                  </FormLabel>
                  <FormMessage />
                </div>

                <FormControl>
                  <Input
                    className="font-bold text-light-gray"
                    placeholder="eg. +1 234 567 890"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
export default FormCard;
