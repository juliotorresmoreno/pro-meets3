import type { PaymentMethod as SPaymentMethod } from "@stripe/stripe-js";

export type PaymentMethod = SPaymentMethod & {
  isDefault: boolean;
};
