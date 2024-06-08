import { create } from "zustand";
import { ChangeEvent } from "react";
import { AddOns, FormValues, Plan } from "../types";
import { addOns, filterAddOns, filterPlans, plans } from "../data";

interface StepsStore {
  step: number;
  complete: CompleteValues[];
  yearly: boolean;
  plans: Plan[];
  addOns: AddOns[];
  formValues: FormValues;
  incrementStep: () => void;
  decrementStep: () => void;
  updateYearly: () => void;
  updatePlan: (plan: { title: string; selected: boolean }) => void;
  updateAddOns: (plan: { title: string; selected: boolean }) => void;
  updateComplete: (item: CompleteValues) => void;
  updateFormValues: (
    input: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  updateFormValues2: (input: string, value: string | string[]) => void;
}

interface CompleteValues {
  step: number;
  complete: boolean;
}

export const useStepsStore = create<StepsStore>((set) => ({
  step: 1,
  complete: [
    { step: 1, complete: false },
    { step: 2, complete: false },
    { step: 3, complete: false },
    { step: 4, complete: false },
  ],
  yearly: false,
  plans: plans,
  addOns: addOns,
  formValues: {
    email: "",
    phoneNo: "",
    name: "",
  },
  incrementStep: () => set((state) => ({ step: state.step + 1 })),
  decrementStep: () => set((state) => ({ step: state.step - 1 })),
  updatePlan: (plan) =>
    set((state) => ({ plans: filterPlans(plan, state.plans) })),
  updateAddOns: (addOn) =>
    set((state) => ({
      addOns: filterAddOns(addOn, state.addOns),
    })),
  updateYearly: () => set((state) => ({ yearly: !state.yearly })),
  updateComplete: (item) =>
    set((state) => ({ complete: [...state.complete, item] })),
  updateFormValues: (input) => (e) => {
    const { value } = e.target;
    set((state) => ({ formValues: { ...state.formValues, [input]: value } }));
  },
  updateFormValues2: (input, value) =>
    set((state) => ({ formValues: { ...state.formValues, [input]: value } })),
}));
