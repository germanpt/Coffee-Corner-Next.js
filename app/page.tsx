import Banner from "@/components/banner.client";
import React from "react";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-[url('/static/background.png')] ">
      <Banner />
    </main>
  );
}
