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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} placeholder="email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register("password")} placeholder="password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit" disabled={isSubmitting}>Login</button>
    </form>
  );
};

export default UserLogin;
