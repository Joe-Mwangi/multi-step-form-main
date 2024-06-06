import { create } from "zustand";

interface StepsStore {
  step: number;
  isCompleted: boolean;
  yearly: boolean;
  plan: Plan;
  addOns: Plan;
  incrementStep: () => void;
  decrementStep: () => void;
  updatePlan: (plan: Plan) => void;
  updateAddOns: (plan: Plan) => void;
  updateYearly: () => void;
}

interface Plan {
  title: string;
  price: string;
}

export const useStepsStore = create<StepsStore>((set) => ({
  step: 1,
  isCompleted: false,
  yearly: false,
  plan: { title: "", price: "" },
  addOns: { title: "", price: "" },
  incrementStep: () =>
    set((state) => ({ step: state.step > 4 ? 4 : state.step + 1 })),
  decrementStep: () =>
    set((state) => ({ step: state.step < 1 ? 1 : state.step - 1 })),
  updatePlan: (plan) => set({ plan }),
  updateAddOns: (addOns) => set({ addOns }),
  updateYearly: () => set((state) => ({ yearly: !state.yearly })),
}));
