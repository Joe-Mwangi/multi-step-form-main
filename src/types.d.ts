export type CardProps = {
  data: Plan;
};

export type Card2Props = {
  data: AddOns;
};

export interface FormValues {
  email: string;
  name: string;
  phoneNo: string;
}

export interface Plan {
  title: string;
  yearly: number;
  monthly: number;
  icon: JSX.Element;
  selected: boolean;
}

export interface AddOns {
  title: string;
  description: string;
  yearly: number;
  monthly: number;
  selected: boolean;
}
