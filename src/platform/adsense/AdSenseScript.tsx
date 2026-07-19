"use client";

import Script from "next/script";
import {
  canServeAds,
  getAdSenseScriptSrc,
  readAdSenseConfig,
  type AdConsentState,
} from "./config";

type AdSenseScriptProps = {
  consent: AdConsentState;
};

/**
 * Loads AdSense only after the product is approved/active and the CMP has
 * returned a usable consent state. Keep `consent="unknown"` until the CMP
 * callback has completed.
 */
export function AdSenseScript({ consent }: AdSenseScriptProps) {
  const config = readAdSenseConfig();
  if (!canServeAds(config, consent)) return null;

  return (
    <Script
      id="dbl-adsense"
      async
      crossOrigin="anonymous"
      strategy="afterInteractive"
      src={getAdSenseScriptSrc(config)}
    />
  );
}
