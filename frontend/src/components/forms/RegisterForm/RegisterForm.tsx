"use client";

import DateInput from "@/components/inputs/DateInput/DateInput";
import DefaultInput from "@/components/inputs/DefaultInput/DefaultInput";
import PasswordInput from "@/components/inputs/PasswordInput/PasswordInput";
import {
  RegisterSchema,
  RegisterSchemaType,
} from "@/validations/RegisterSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import styles from "./registerForm.module.css";
import { Checkbox } from "@/components/inputs/Checkbox/Checkbox";

const RegisterForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: yupResolver(RegisterSchema),
  });

  const handleFormSubmit = (data: RegisterSchemaType) => {
    console.log(data);
  };

  return (
    <div className={styles.formContainer}>
      <h1>Cadastro</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <DefaultInput
          id="name"
          label="Nome"
          placeholder="Digite seu nome"
          register={register("name")}
          errorMessage={errors.name?.message}
        />
        <Controller
          control={control}
          name="birthDate"
          render={({ field }) => (
            <DateInput
              id="birthDate"
              label="Data de Nascimento"
              placeholder="dd/mm/aaaa"
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.birthDate?.message}
            />
          )}
        />
        <DefaultInput
          id="email"
          label="Email"
          placeholder="Digite seu email"
          register={register("email")}
          errorMessage={errors.email?.message}
        />
        <DefaultInput
          id="emailConfirmation"
          label="Confirmação de Email"
          placeholder="Digite seu email novamente"
          register={register("emailConfirmation")}
          errorMessage={errors.emailConfirmation?.message}
        />
        <PasswordInput
          id="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register("password")}
          errorMessage={errors.password?.message}
        />
        <PasswordInput
          id="passwordConfirmation"
          label="Confirmação de Senha"
          placeholder="Digite sua senha novamente"
          register={register("passwordConfirmation")}
          errorMessage={errors.passwordConfirmation?.message}
        />
        <Checkbox
          id="terms"
          label="Aceito os termos e condições"
          register={register("acceptTerms")}
        />
      </form>
    </div>
  );
};
export default RegisterForm;
