import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "../../userSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type User = z.infer<typeof LoginSchema>;

type LoginUserProps = {
  onLogin: (user: User) => void;
};

const UserLogin = ({ onLogin }: LoginUserProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    resolver: zodResolver(LoginSchema),
  });

const onSubmit = (data: User) => {
  onLogin(data);
};

  return (
<form
  onSubmit={handleSubmit(onSubmit)}
  className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-sm mx-auto"
>
  <div className="flex flex-col">
    <input
      type="email"
      {...register("email")}
      placeholder="Email"
      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.email && (
      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
    )}
  </div>

  <div className="flex flex-col">
    <input
      type="password"
      {...register("password")}
      placeholder="Password"
      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.password && (
      <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
    )}
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className="bg-blue-500 text-black py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
  >
    Login
  </button>
</form>
  );
};

export default UserLogin;
