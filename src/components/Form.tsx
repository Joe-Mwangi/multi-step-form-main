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

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
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
  );
};
export default FormCard;
