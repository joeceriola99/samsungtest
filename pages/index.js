import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="Name" />
          {errors.name && <p> name is required.</p>}
          <br /> <br />
          <input {...register("age", { pattern: /\d+/ })} placeholder="Age" />
          {errors.age && <p>Please enter number for age.</p>}
          <br /> <br />
          <input
            value="male"
            type="radio"
            {...register("sex"})}
          />
          Male <br />
          <input
            value="female"
            type="radio"
            {...register("sex")}
          />
          Female <br /> <br />
          <input
            type="checkbox"
            value="Java"
            {...register("progLanguage")}
          />
          Java
          <input
            type="checkbox"
            value="ReactJS"
            {...register("progLanguage")}
          />
          ReactJS
          <input
            type="checkbox"
            value="NextJS"
            {...register("progLanguage")}
          />
          NextJS
          <input
            type="checkbox"
            value="Python"
            {...register("progLanguage")}
          />
          Python <br /> <br />
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}
