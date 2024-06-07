import { create } from "zustand";
import { ChangeEvent } from "react";
import { FormValues } from "../../types";

interface StepsStore {
  step: number;
  complete: CompleteValues[];
  yearly: boolean;
  plan: Plan;
  addOns: Plan;
  formValues: FormValues;
  incrementStep: () => void;
  decrementStep: () => void;
  updateYearly: () => void;
  updatePlan: (plan: Plan) => void;
  updateAddOns: (plan: Plan) => void;
  updateComplete: (item: CompleteValues) => void;
  updateFormValues: (
    input: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
}

interface Plan {
  title: string;
  price: string;
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
  plan: { title: "", price: "" },
  addOns: { title: "", price: "" },
  formValues: { email: "", phoneNo: "", name: "", plan: "", addOns: "" },
  incrementStep: () => set((state) => ({ step: state.step + 1 })),
  decrementStep: () => set((state) => ({ step: state.step - 1 })),
  updatePlan: (plan) => set({ plan }),
  updateAddOns: (addOns) => set({ addOns }),
  updateYearly: () => set((state) => ({ yearly: !state.yearly })),
  updateComplete: (item) =>
    set((state) => ({ complete: [...state.complete, item] })),
  updateFormValues: (input) => (e) => {
    const { value } = e.target;
    set((state) => ({ formValues: { ...state.formValues, [input]: value } }));
  },
}));
