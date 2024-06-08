export type CardProps = {
  title: string;
  price: string;
  icon: string;
  yearly?: boolean;
};

export type Card2Props = {
  title: string;
  description: string;
  amount: string;
  yearly?: boolean;
};

export interface FormValues {
  email: string;
  name: string;
  phoneNo: string;
}
