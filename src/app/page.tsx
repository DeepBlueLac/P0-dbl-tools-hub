import type { Metadata } from "next";
import { HubShell } from "@/components/hub-shell";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HubShell />;
}
