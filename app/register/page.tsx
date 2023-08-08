"use client";

import React, { useEffect } from "react";
import Auth from "../components/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";

function page() {
  const [user, loading] = useAuthState(auth);
  const { push } = useRouter();

  useEffect(() => {
    if (user) push("/");
  }, [user]);

  if (!loading && !user) return <Auth type="register" />;

  return <Loading />;
}

export default page;
