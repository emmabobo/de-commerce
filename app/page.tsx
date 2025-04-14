'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen">
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Drogo-Store</h1>
        <p className="text-lg text-gray-600 mb-6">Your one-stop shop for amazing deals</p>
      </section>
    </main>
  );
}

