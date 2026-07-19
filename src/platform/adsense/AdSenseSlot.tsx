"use client";

import { useEffect, useRef } from "react";
import {
  canServeAds,
  readAdSenseConfig,
  type AdConsentState,
} from "./config";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, never>>;
  }
}

type AdSenseSlotProps = {
  slot: string;
  consent: AdConsentState;
  status?: "ready" | "loading" | "empty" | "error";
  className?: string;
};

const slotPattern = /^\d{6,20}$/;

/**
 * A neutral, labelled ad surface. The caller must keep it out of loading,
 * empty, error, download, and primary-result states.
 */
export function AdSenseSlot({
  slot,
  consent,
  status = "ready",
  className,
}: AdSenseSlotProps) {
  const pushedSlot = useRef<string | null>(null);
  const config = readAdSenseConfig();
  const ready = canServeAds(config, consent, status) && slotPattern.test(slot);

  useEffect(() => {
    if (!ready || pushedSlot.current === slot) return;
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
    pushedSlot.current = slot;
  }, [ready, slot]);

  if (!ready) return null;

  return (
    <div className={className} aria-label="Advertisement" role="complementary">
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: 90 }}
        data-ad-client={config.clientId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
