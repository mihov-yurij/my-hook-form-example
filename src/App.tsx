import { useForm } from "react-hook-form";
import { Field } from "./components/Field";

interface IFormInput {
  username: string;
  email: string;
  password: string;

}

function App() {
 
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

   return (
  <form onSubmit={handleSubmit(onSubmit)}>
   

<Field label="Имя пользователя" error={errors.username}> 
  <input 
    id="username" 
    {...register("username", { 
      required: "Это поле обязательно",
      minLength: { value: 3, message: "Минимум 3 символа" } 
    })} 
  />
</Field>


    <button type="submit">Отправить</button>
  </form>
);

}

export default App;
