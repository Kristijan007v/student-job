import Link from "next/link";
import React from "react";
import Button from "../components/Buttons/Button/Button";
import GoogleIcon from "../components/Icons/GoogleIcon";
import Input from "../components/Input/Input";

export default function SignIn() {
  return (
    <>
      <div className="p-6 mt-10 text-center flex flex-col space-y-2">
        <h1>Hello</h1>
        <p>Enter your details below</p>
      </div>

      {/* Sign in form */}
      <div>
        <form className="p-6 flex flex-col space-y-4">
          <Input
            labelFor="email"
            labelText="E-mail"
            type="text"
            placeholder="Your e-mail"
            icon={"email"}
          />
          <Input
            labelFor="password"
            labelText="Password"
            type="password"
            placeholder="Your password"
            icon={"password"}
          />
          <Link href={""}>
            <a className="text-right">Forgot password?</a>
          </Link>
          <Button text="Sign in" type="default" />
        </form>
      </div>

      {/* Or continue with */}
      <div className="text-center flex flex-col space-y-5 m-6">
        <p>Or continue with</p>
        <Button
          text="Sign in with Google"
          icon={"google"}
          iconSize="xl"
          type="special"
        />
        <Button
          text="Sign in with Apple"
          icon={"apple"}
          iconSize="xl"
          type="special"
        />
      </div>

      <div className="text-center p-6 mt-16">
        <p>
          Don’t Have Any Account?{" "}
          <span className="font-bold underline underline-offset-4">
            Sign up
          </span>
        </p>
      </div>
    </>
  );
}
