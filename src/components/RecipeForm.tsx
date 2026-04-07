import { useForm, SubmitHandler } from "react-hook-form";

// 1. Описываем структуру данных формы
interface RegistrationData {
  name: string;
  email: string;
  password: string;
}

// 2. Описываем пропсы компонента
interface RecipeFormProps {
  saveData: (data: RegistrationData) => void;
}

const RecipeForm = ({ saveData }: RecipeFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>();

  const onSubmit: SubmitHandler<RegistrationData> = (data) => {
    saveData(data);
  };

  return (
    <div className="registration-container">
      <h1>Welcome Back</h1>
      <p>Please enter your details to register</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2>Registration</h2>

        {/* Поле Name */}
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Ivan Ivanov"
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
        </div>

        {/* Поле Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="example@mail.com"
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
        </div>

        {/* Поле Password */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="........"
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default RecipeForm;

