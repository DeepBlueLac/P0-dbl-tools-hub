import { describe, expect, it } from "vitest";
import { canServeAds, getAdSenseVerificationMeta, readAdSenseConfig } from "./config";

const approvedEnv = {
  NEXT_PUBLIC_ADSENSE_STAGE: "approved",
  NEXT_PUBLIC_ADSENSE_CLIENT: "ca-pub-1234567890123456",
  NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: "pub-1234567890123456",
  NEXT_PUBLIC_ADSENSE_VERIFICATION: "meta",
};

describe("DBL AdSense guard", () => {
  it("stays disabled before approval", () => {
    const config = readAdSenseConfig({
      ...approvedEnv,
      NEXT_PUBLIC_ADSENSE_STAGE: "application-ready",
    });
    expect(config.enabled).toBe(false);
  });

  it("requires matching client and publisher IDs", () => {
    const config = readAdSenseConfig({
      ...approvedEnv,
      NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: "pub-9999999999999999",
    });
    expect(config.enabled).toBe(false);
  });

  it("enables configuration only after approval", () => {
    expect(readAdSenseConfig(approvedEnv).enabled).toBe(true);
  });

  it("exposes a verification meta tag without enabling ads", () => {
    const config = readAdSenseConfig({
      ...approvedEnv,
      NEXT_PUBLIC_ADSENSE_STAGE: "application-ready",
    });
    expect(getAdSenseVerificationMeta(config)).toEqual({
      "google-adsense-account": "ca-pub-1234567890123456",
    });
    expect(config.enabled).toBe(false);
    expect(getAdSenseVerificationMeta(readAdSenseConfig({
      ...approvedEnv,
      NEXT_PUBLIC_ADSENSE_STAGE: "application-ready",
      NEXT_PUBLIC_ADSENSE_VERIFICATION: "none",
    }))).toEqual({});
    expect(getAdSenseVerificationMeta(readAdSenseConfig())).toEqual({});
  });

  it("blocks ads without consent or ready content", () => {
    const config = readAdSenseConfig(approvedEnv);
    expect(canServeAds(config, "unknown", "ready")).toBe(false);
    expect(canServeAds(config, "denied", "ready")).toBe(false);
    expect(canServeAds(config, "granted", "loading")).toBe(false);
    expect(canServeAds(config, "granted", "error")).toBe(false);
    expect(canServeAds(config, "granted", "ready")).toBe(true);
    expect(canServeAds(config, "non-personalized", "ready")).toBe(true);
  });
});
