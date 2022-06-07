import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../components/Buttons/Button/Button";
import Input from "../components/Input/Input";
import Skeleton from "../components/Skeleton/Skeleton";

export default function SignIn() {
  //Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onFormSubmit = (data: any) => {
    console.log(data);
  };

  const handleError = (errors: any) => {
    console.log(errors);
  };

  const registerOptions = {
    loginEmail: {
      required: "E-mail is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address",
      },
    },
    loginPassword: {
      required: "Password is required",
    },
  };

  return (
    <Skeleton>
      <div className="mt-10 flex flex-col space-y-2 p-6 text-center">
        <h1>Sign in</h1>
        <p>Enter your details below</p>
      </div>

      {/* Sign in form */}
      <div>
        <form
          name="sign-in"
          id="sign-in"
          className="flex flex-col space-y-4 p-6"
          onSubmit={handleSubmit(onFormSubmit, handleError)}
        >
          <Input
            labelFor="email"
            labelText="E-mail"
            type="text"
            placeholder="Your e-mail"
            icon={"email"}
            name="loginEmail"
            id="loginEmail"
            validateForm={{
              ...register("loginEmail", registerOptions.loginEmail),
            }}
            onError={errors?.loginEmail ? true : false}
          />
          <p className="text-sm text-red-500">
            {errors?.loginEmail && errors.loginEmail.message}
          </p>
          <Input
            labelFor="password"
            labelText="Password"
            type="password"
            placeholder="Your password"
            icon={"password"}
            name="loginPassword"
            id="loginPassword"
            validateForm={{
              ...register("loginPassword", registerOptions.loginPassword),
            }}
            onError={errors?.loginPassword ? true : false}
          />
          <p className="text-sm text-red-500">
            {errors?.loginPassword && errors.loginPassword.message}
          </p>
          <Link href={""}>
            <a className="text-right">Forgot password?</a>
          </Link>
          <Button
            type={"submit"}
            text={"Sign in"}
            shape="default"
            form="sign-in"
            disabled={false}
          />
        </form>
      </div>

      {/* Or continue with */}
      <div className="m-6 flex flex-col space-y-5 text-center">
        <p>Or continue with</p>
        <Button
          text="Sign in with Google"
          icon={"google"}
          iconSize="xl"
          shape="special"
        />
        <Button
          text="Sign in with Apple"
          icon={"apple"}
          iconSize="xl"
          shape="special"
        />
      </div>

      <div className="mt-16 p-6 text-center">
        <p>
          Don’t Have an Account?{" "}
          <Link href={"/register"}>
            <a className="font-bold underline underline-offset-4">Sign up</a>
          </Link>
        </p>
      </div>
    </Skeleton>
  );
}
