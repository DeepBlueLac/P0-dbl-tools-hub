export type AdSenseStage =
  | "hypothesis"
  | "application-ready"
  | "approved"
  | "active";

export type AdConsentState =
  | "unknown"
  | "granted"
  | "non-personalized"
  | "denied";

export type AdSenseConfig = {
  stage: AdSenseStage;
  clientId: string;
  publisherId: string;
  enabled: boolean;
};

type AdSenseEnv = {
  NEXT_PUBLIC_ADSENSE_STAGE?: string;
  NEXT_PUBLIC_ADSENSE_CLIENT?: string;
  NEXT_PUBLIC_ADSENSE_PUBLISHER_ID?: string;
};

const stages: AdSenseStage[] = [
  "hypothesis",
  "application-ready",
  "approved",
  "active",
];

const publisherPattern = /^pub-\d{16}$/;
const clientPattern = /^ca-pub-\d{16}$/;

export function readAdSenseConfig(env: AdSenseEnv = {
  NEXT_PUBLIC_ADSENSE_STAGE: process.env.NEXT_PUBLIC_ADSENSE_STAGE,
  NEXT_PUBLIC_ADSENSE_CLIENT: process.env.NEXT_PUBLIC_ADSENSE_CLIENT,
  NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID,
}): AdSenseConfig {
  const stage = stages.includes(env.NEXT_PUBLIC_ADSENSE_STAGE as AdSenseStage)
    ? (env.NEXT_PUBLIC_ADSENSE_STAGE as AdSenseStage)
    : "hypothesis";
  const clientId = (env.NEXT_PUBLIC_ADSENSE_CLIENT || "").trim();
  const publisherId = (env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "").trim();
  const idsMatch = clientPattern.test(clientId) && publisherPattern.test(publisherId)
    && clientId === `ca-${publisherId}`;

  return {
    stage,
    clientId,
    publisherId,
    enabled: idsMatch && (stage === "approved" || stage === "active"),
  };
}

export function getAdSenseScriptSrc(config = readAdSenseConfig()): string {
  return `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(config.clientId)}`;
}

export function getAdSenseVerificationMeta(
  config = readAdSenseConfig(),
): Record<string, string> {
  const canVerify = config.stage !== "hypothesis" && publisherPattern.test(config.publisherId);
  return canVerify
    ? { "google-adsense-account": `ca-${config.publisherId}` }
    : {};
}

export function canServeAds(
  config: AdSenseConfig,
  consent: AdConsentState,
  status: "ready" | "loading" | "empty" | "error" = "ready",
): boolean {
  return config.enabled
    && status === "ready"
    && (consent === "granted" || consent === "non-personalized");
}
