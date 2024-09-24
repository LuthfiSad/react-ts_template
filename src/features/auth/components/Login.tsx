import { AuthLoginBodyModel } from "@core/model/auth";
import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useAuthLogin } from "../hooks/useAuth";

const InitialValue = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const [authBody, setAuthBody] = useState<AuthLoginBodyModel>({
    ...InitialValue,
  });
  const [, setErrors] = useState<AuthLoginBodyModel>({ ...InitialValue });

  const mutation = useAuthLogin();

  const validate = () => {
    if (!authBody.email || !authBody.password) {
      const newErrors: AuthLoginBodyModel = { ...InitialValue };

      if (!authBody.email) {
        newErrors.email = "Email is required";
      }
      if (!authBody.password) {
        newErrors.password = "Password is required";
      }
      setErrors(newErrors);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    await mutation.mutateAsync(authBody);
  };
  return (
    <form className="mt-8 mb-2 mx-auto w-full" onSubmit={handleSubmit}>
      <div className="mb-1 flex flex-col gap-2">
        <Typography
          variant="small"
          color="blue-gray"
          className="-mb-3 font-medium"
        >
          Your email
        </Typography>
        <Input
          size="lg"
          placeholder="johndoe@email.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          autoComplete="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAuthBody((prev) => ({ ...prev, email: e.target.value }))
          }
          // error={errors.email}
          value={authBody.email}
        />
        <Typography
          variant="small"
          color="blue-gray"
          className="-mb-3 font-medium"
        >
          Password
        </Typography>
        <Input
          type="password"
          size="lg"
          placeholder="********"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          autoComplete="current-password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAuthBody((prev) => ({ ...prev, password: e.target.value }))
          }
          // error={errors.password}
          value={authBody.password}
        />
      </div>
      <Button
        type="submit"
        className="mt-6"
        fullWidth
        disabled={mutation.isPending}
      >
        Log In
      </Button>
    </form>
  );
};

export default Login;
