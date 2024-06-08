import { AdvancedIcon, ArcadeIcon, ProIcon } from "./components/icons";
import { AddOns, Plan } from "./types";

export const formValues = {
  email: "",
  phoneNo: "",
  name: "",
};
export const plans = [
  {
    title: "Arcade",
    yearly: 90,
    monthly: 9,
    icon: <ArcadeIcon />,
    selected: false,
  },
  {
    title: "Advanced",
    yearly: 120,
    monthly: 12,
    icon: <AdvancedIcon />,
    selected: false,
  },
  {
    title: "Pro",
    yearly: 150,
    monthly: 15,
    icon: <ProIcon />,
    selected: false,
  },
];

export const addOns = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    yearly: 10,
    monthly: 1,
    selected: false,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    yearly: 20,
    monthly: 2,
    selected: false,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    yearly: 20,
    monthly: 2,
    selected: false,
  },
];

export function filterPlans(
  item: { title: string; selected: boolean },
  arr: Plan[]
) {
  return arr.map((plan) => {
    if (plan.title === item.title) {
      plan.selected = item.selected;
    } else {
      plan.selected = false;
    }
    return plan;
  });
}

export function filterAddOns(
  item: { title: string; selected: boolean },
  arr: AddOns[]
) {
  return arr.map((plan) => {
    if (plan.title === item.title) {
      plan.selected = item.selected;
    }
    return plan;
  });
}

export function calculateTotalPrice(
  addOns: AddOns[],
  plans: Plan[],
  yearly: boolean
) {
  const t1 = addOns
    .filter((item) => item.selected)
    .reduce((acc, current) => {
      if (yearly) {
        return acc + current.yearly;
      }
      return acc + current.monthly;
    }, 0);

  const plan = yearly
    ? plans.find((item) => item.selected)
    : plans.find((item) => item.selected);

  const t2 = (yearly ? plan?.yearly : plan?.monthly) || 0;
  return { totalPrice: t1 + t2, plan };
}
