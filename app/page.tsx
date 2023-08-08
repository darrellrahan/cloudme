"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import MainLayout from "./components/MainLayout";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./components/Loading";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const { push } = useRouter();

  useEffect(() => {
    if (!user) push("/login");
  }, [user]);

  if (!loading && user)
    return (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    );

  return <Loading />;
}
