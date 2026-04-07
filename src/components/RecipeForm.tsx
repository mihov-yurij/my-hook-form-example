import { useForm, SubmitHandler } from "react-hook-form";
import { RecipeForm } from "./RecipeForm"


interface Recipe {
  name: string;
  email: string;
  password?: string;
}

const RecipeForm = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Recipe>();

  const submitForm: SubmitHandler<Recipe> = (formData) => {
    console.log("Данные успешно отправлены:", formData);
    alert(`Рецепт от ${formData.name} принят!`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Создать рецепт</h2>
      
      
      <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
        
       
        <div>
          <label className="block text-sm font-medium text-gray-700">Имя</label>
          <input
            {...register("name", { required: "Введите имя" })}
            className={`mt-1 block w-full border rounded-md p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Ваше имя"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

       
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { 
              required: "Email обязателен", 
              pattern: { value: /^\S+@\S+$/i, message: "Неверный формат email" } 
            })}
            className={`mt-1 block w-full border rounded-md p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="example@mail.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Отправить рецепт
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
