export const SITE_ENV = process.env.NEXT_PUBLIC_SITE_ENV ?? "staging";
export const IS_STAGING = SITE_ENV !== "production";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://staging.rodgersfertilizer.example";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
