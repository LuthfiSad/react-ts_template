import { Typography } from "@material-tailwind/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();

  if (auth?.token) {
    return <Navigate to={"/admin/acara"} replace />;
  }

  return (
    <section className="relative flex min-h-screen justify-center items-center w-full">
      <div className="w-full md:w-96 m-8">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Log In
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email and password to Log In.
          </Typography>
        </div>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
