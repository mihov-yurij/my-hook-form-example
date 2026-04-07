import { useForm } from "react-hook-form";
import { Field } from "./components/Field";
import { RecipeForm } from "./components/RecipeForm";
import "./App.css";

interface IFormInput {
  username: string;
  email: string;
  password: string;
}

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => console.log("Registration:", data);

  // Стили для инпутов
  const inputStyle = "w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 text-gray-700 shadow-sm";
  const iconWrapper = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 font-sans text-slate-900">
      <div className="w-full max-w-[450px] animate-in fade-in duration-700">
        
        {/* Заголовок страницы */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-slate-500">Please enter your details to register</p>
        </div>

        {/* Карточка регистрации */}
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] p-8 border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-slate-800">Registration</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Field label="Your Name" error={errors.username}>
              <div className="relative">
                <span className={iconWrapper}>
                  <svg size="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
                <input
                  id="username"
                  placeholder="Ivan Ivanov"
                  className={inputStyle}
                  {...register("username", { required: "Введите имя" })}
                />
              </div>
            </Field>

            <Field label="Email" error={errors.email}>
              <div className="relative">
                <span className={iconWrapper}>
                  <svg size="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  className={inputStyle}
                  {...register("email", { required: "Введите email" })}
                />
              </div>
            </Field>

            <Field label="Password" error={errors.password}>
              <div className="relative">
                <span className={iconWrapper}>
                  <svg size="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className={inputStyle}
                  {...register("password", { required: "Введите пароль" })}
                />
              </div>
            </Field>

            <button type="submit" className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3.5 rounded-xl transition-all transform active:scale-[0.98] shadow-lg">
              Create Account
            </button>
          </form>
        </div>

        {/* Декоративный разделитель */}
        <div className="flex items-center my-10 px-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Configuration</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Форма рецепта */}
        <div className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
          <RecipeForm saveData={(data) => console.log("Recipe:", data)} />
        </div>
      </div>
    </div>
  );
}

export default App;
