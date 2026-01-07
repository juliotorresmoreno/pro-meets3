import type Stripe from 'stripe';
import config from "../config";
import { PaymentMethod } from "../models/PaymentMethod";

interface CreateSetupIntentResponse {
  clientSecret: string;
  customerId: string;
}

export async function createSetupIntent(): Promise<CreateSetupIntentResponse> {
  const response = await fetch(`${config.apiUrl}/stripe/create-setup-intent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to create setup intent");
  }

  return response.json();
}

export async function attachPaymentMethod(
  paymentMethodId: string
): Promise<void> {
  const response = await fetch(
    `${config.apiUrl}/stripe/attach-payment-method`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentMethodId }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to attach payment method");
  }
}

export async function detachPaymentMethod(
  paymentMethodId: string
): Promise<void> {
  const response = await fetch(
    `${config.apiUrl}/stripe/detach-payment-method`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentMethodId }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to detach payment method");
  }
}

export async function getPaymentMethods(): Promise<PaymentMethod[]> {
  const response = await fetch(`${config.apiUrl}/stripe/payment-methods`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to retrieve payment methods");
  }

  return (await response.json()).data as PaymentMethod[];
}

export async function setDefaultPaymentMethod(
  paymentMethodId: string
): Promise<void> {
  const response = await fetch(
    `${config.apiUrl}/stripe/set-default-payment-method`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentMethodId }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to set default payment method");
  }
}

export async function getInvoiceHistory(): Promise<Stripe.Invoice[]> {
  const response = await fetch(`${config.apiUrl}/stripe/invoice-history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to retrieve invoice history");
  }

  return (await response.json()).data as Stripe.Invoice[];
}
