import { dateRegex } from "@/utils/regex";
import { isValid, parse } from "date-fns";
import * as yup from "yup";

export type RegisterSchemaType = yup.InferType<typeof RegisterSchema>;

export type SexOrientation = "Masculino" | "Feminino" | "Outro";

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  sexOrientation: yup
    .string()
    .oneOf(["Masculino", "Feminino", "Outro"], "Orientação sexual inválida")
    .optional()
    .default(null),
  birthDate: yup
    .string()
    .required("Data de nascimento é obrigatória")
    .test("is-valid-date", "Data de nascimento inválida", (value) => {
      if (!value) return false;
      if (!dateRegex.test(value)) return false;
      const parsedDate = parse(value, "dd/MM/yyyy", new Date());
      return isValid(parsedDate);
    })
    .test({
      name: "is-past-date",
      message: "A data de nascimento deve ser no passado",
      test: (value) => {
        if (!value) return false;
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return false;
        const parsedDate = parse(value, "dd/MM/yyyy", new Date());
        if (!isValid(parsedDate)) return false;
        const today = new Date();
        return parsedDate < today;
      },
    }),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  emailConfirmation: yup
    .string()
    .oneOf([yup.ref("email")], "Os emails devem ser iguais")
    .required("Confirmação de email é obrigatória"),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .required("Senha é obrigatória")
    .test({
      name: "has-uppercase",
      message: "A senha deve conter pelo menos uma letra maiúscula",
      test: (value) => /[A-Z]/.test(value || ""),
    })
    .test({
      name: "has-lowercase",
      message: "A senha deve conter pelo menos uma letra minúscula",
      test: (value) => /[a-z]/.test(value || ""),
    })
    .test({
      name: "has-number",
      message: "A senha deve conter pelo menos um número",
      test: (value) => /[0-9]/.test(value || ""),
    })
    .test({
      name: "has-special-char",
      message: "A senha deve conter pelo menos um caractere especial",
      test: (value) => /[\W|_]/.test(value || ""),
    }),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Confirmação de senha é obrigatória"),
});
