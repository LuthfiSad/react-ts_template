import React from "react"
import AuthLayout from "../containers/AuthLayout"
import Login from "../components/Login"

const RegisterView: React.FC = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  )
}

export default RegisterView