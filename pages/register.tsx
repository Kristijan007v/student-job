import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../components/Buttons/Button/Button";
import Input from "../components/Input/Input";
import Skeleton from "../components/Skeleton/Skeleton";

export default function Register() {
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
    email: {
      required: "E-mail is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    password: {
      required: "Password is required",
      max: 64,
      min: 8,
      maxLength: 100,
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message:
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
      },
    },
    repeatPassword: {
      required: "This field is required",
      validate: (value: any) => {
        return value === getValues("password") || "Passwords must match";
      },
    },
  };

  return (
    <Skeleton>
      <div className="mt-10 flex flex-col space-y-2 p-6 text-center">
        <h1>Register</h1>
        <p>Find your dream job NOW!</p>
      </div>

      {/* Sign up form */}
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
            name="email"
            id="email"
            validateForm={{ ...register("email", registerOptions.email) }}
            onError={errors?.email ? true : false}
          />

          <p className="text-sm text-red-500">
            {errors?.email && errors.email.message}
          </p>
          <Input
            labelFor="password"
            labelText="Password"
            type="password"
            placeholder="Your password"
            icon={"password"}
            name="password"
            id="password"
            validateForm={{ ...register("password", registerOptions.password) }}
            onError={errors?.password ? true : false}
          />
          <p className="text-sm text-red-500">
            {errors?.password && errors.password.message}
          </p>
          <Input
            labelFor="password"
            labelText="Repeat password"
            type="password"
            placeholder="Repeat password"
            icon={"password"}
            name="repeatPassword"
            id="repeatPassword"
            validateForm={{
              ...register("repeatPassword", registerOptions.repeatPassword),
            }}
            onError={errors?.repeatPassword ? true : false}
          />
          <p className="text-sm text-red-500">
            {errors?.repeatPassword && errors.repeatPassword.message}
          </p>
          <Button
            type={"submit"}
            text="Sign up"
            shape="default"
            form="sign-in"
            disabled={false}
          />
        </form>
      </div>

      {/* Or continue with */}
      <div className="m-6 flex flex-col space-y-5 text-center">
        <p>Or register with</p>
        <Button
          text="Register with Google"
          icon={"google"}
          iconSize="xl"
          shape="special"
          onclick={() => {
            toast.success("You are in!");
          }}
        />
        <Button
          text="Register with Apple"
          icon={"apple"}
          iconSize="xl"
          shape="special"
        />
      </div>

      <div className="mt-16 p-6 text-center">
        <p>
          Have an Account?{" "}
          <Link href={"/sign-in"}>
            <a className="font-bold underline underline-offset-4">Sign in</a>
          </Link>
        </p>
      </div>
    </Skeleton>
  );
}
