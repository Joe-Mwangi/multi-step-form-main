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

const message = "This Field is Required";

const formSchema = z.object({
  name: z.string().min(1, message),
  email: z.string().min(1, message),
  phoneNo: z.string().min(1, message),
});

type FormValues = z.infer<typeof formSchema>;

const FormCard = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phoneNo: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="absolute md:static top-32 inset-x-5  rounded-lg shadow-lg md:shadow-none md:rounded-none p-6 bg-white md:p-0">
      <div className="flex flex-col gap-4 md:gap-2 mb-8">
        <h2 className="font-bold text-2xl text-marine-blue">Personal info</h2>
        <p className="font-bold text-md text-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-marine-blue">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-bold text-light-gray"
                      placeholder="eg. Stephen King"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-marine-blue">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-bold text-light-gray"
                      placeholder="eg. stephenking@lorem.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-marine-blue">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-bold text-light-gray"
                      placeholder="eg. +1 234 567 890"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};
export default FormCard;
