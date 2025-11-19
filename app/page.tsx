"use client";

import { useState } from "react";
import LandingIntro from "@/components/LandingIntro";
import MainHome from "./(main)/page";

export default function RootPage() {
  const [showIntro, setShowIntro] = useState(true);

  // intro चालू असताना फक्त intro दाखव
  if (showIntro) {
    return <LandingIntro onFinish={() => setShowIntro(false)} />;
  }

  // intro संपल्यावर main homepage
  return <MainHome />;
}
