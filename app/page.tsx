"use client";

import { useState } from "react";
import LandingIntro from "@/components/LandingIntro";
import MainHome from "./(main)/page";

export default function RootPage() {
  const [showIntro, setShowIntro] = useState(true);

 
  if (showIntro) {
    return <LandingIntro onFinish={() => setShowIntro(false)} />;
  }

  return <MainHome />;
}
