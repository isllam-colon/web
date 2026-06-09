"use client";

import { useEffect, useState } from "react";

export function StoreHydration({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className="min-h-screen bg-off-white" />;
  }
  return <>{children}</>;
}
