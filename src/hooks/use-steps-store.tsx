import { create } from "zustand";
import { ChangeEvent } from "react";
import { AddOns, FormValues, Plan } from "../types";
import { addOns, filterAddOns, filterPlans, formValues, plans } from "../data";

interface StepsStore {
  step: number;
  yearly: boolean;
  plans: Plan[];
  addOns: AddOns[];
  formValues: FormValues;
  updateStep: (step: number) => void;
  incrementStep: () => void;
  decrementStep: () => void;
  updateYearly: () => void;
  updatePlan: (plan: { title: string; selected: boolean }) => void;
  updateAddOns: (plan: { title: string; selected: boolean }) => void;
  updateFormValues: (
    input: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useStepsStore = create<StepsStore>((set) => ({
  step: 1,
  yearly: false,
  plans,
  addOns,
  formValues,
  updateStep: (step) => set({ step }),
  incrementStep: () => set((state) => ({ step: state.step + 1 })),
  decrementStep: () => set((state) => ({ step: state.step - 1 })),
  updatePlan: (plan) =>
    set((state) => ({ plans: filterPlans(plan, state.plans) })),
  updateAddOns: (addOn) =>
    set((state) => ({
      addOns: filterAddOns(addOn, state.addOns),
    })),
  updateYearly: () => set((state) => ({ yearly: !state.yearly })),
  updateFormValues: (input) => (e) => {
    const { value } = e.target;
    set((state) => ({ formValues: { ...state.formValues, [input]: value } }));
  },
}));
