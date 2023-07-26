import React from "react";
import AuthForm from "./AuthForm";
import Logo from "./Logo";

function Auth({ type }: { type: "login" | "register" }) {
  return (
    <main className="h-screen flex justify-center py-12">
      <div className="flex flex-col items-center gap-10">
        <Logo />
        <AuthForm type={type} />
      </div>
    </main>
  );
}

export default Auth;
