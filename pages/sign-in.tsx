import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../components/Buttons/Button/Button";
import Input from "../components/Input/Input";
import Skeleton from "../components/Skeleton/Skeleton";

export default function SignIn() {
  const { register, getValues, handleSubmit, reset, formState } = useForm();

  const { isSubmitting } = formState;
  const { errors } = formState;

  const signIn = () => {
    const email = getValues("email");
    console.log(email);
  };

  return (
    <Skeleton>
      <div className="mt-10 flex flex-col space-y-2 p-6 text-center">
        <h1>Hello</h1>
        <p>Enter your details below</p>
      </div>

      {/* Sign in form */}
      <div>
        <form
          name="sign-in"
          id="sign-in"
          className="flex flex-col space-y-4 p-6"
          onSubmit={handleSubmit(signIn)}
        >
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
          <Button
            type={"submit"}
            text={isSubmitting ? "Signing in..." : "Sign in"}
            shape="default"
            form="sign-in"
            disabled={isSubmitting ? true : false}
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
          onclick={() => {
            toast.success("You are in!");
          }}
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
          Don’t Have Any Account?{" "}
          <span className="font-bold underline underline-offset-4">
            Sign up
          </span>
        </p>
      </div>
    </Skeleton>
  );
}
